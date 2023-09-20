import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

class DetailUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {}
        };
    }
    async componentDidMount() {
        try {
            let id = this.props.match.params.id;
            // console.log("check props: ", this.props.match.params.id)
            const res = await axios.get(`https://reqres.in/api/users/${id}`)
            // console.log("check res: ", res.data)
            this.setState({
                users: res.data && res.data.data ?
                    res.data.data
                    :
                    {}
            });
            // console.log("check state: ", this.state.users)
        } catch (error) {
            console.error("Error fetching data:", error);
        }


    }

    handleBack = () => {
        this.props.history.push(`/users`)
    }
    render() {
        let { users } = this.state;
        let isEmptyObj = Object.keys(users).length === 0;
        return (
            <>
                <div className="users-container">
                    <div className="title">
                        Render Detail User
                    </div>
                    <div className="content">
                        {isEmptyObj === false &&
                            <>
                                <div className="child" key={users.id}>
                                    <div>User's name: {users.first_name} - {users.last_name} </div>
                                    <div>User's email: {users.email}</div>
                                    <div>User's
                                        avatar: <img src={users.avatar} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <button className="back-btn" onClick={() => this.handleBack()}>Back</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </>
        )
    }

}

export default withRouter(DetailUsers);
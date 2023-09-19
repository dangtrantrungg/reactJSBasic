import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import "../../assets/scss/users.scss"
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    async componentDidMount() {
        try {
            const res = await axios.get("https://reqres.in/api/users?page=1");
            this.setState({
                users: res.data && res.data.data ?
                    res.data.data
                    :
                    []
            });

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    handleDetailUser = (user) => {
        this.props.history.push(`/users/${user.id}`)
    }
    render() {
        let { users } = this.state;

        return (
            <>
                <div className="users-container">
                    <div className="title">
                        Render all users
                    </div>
                    <div className="content">
                        {users && users.length > 0 &&
                            users.map((item, index) => {
                                return (
                                    <>
                                        <div className="child" key={item.id}>
                                            {index + 1} - {item.first_name} - {item.last_name}
                                            <button onClick={() => this.handleDetailUser(item)}>Detail</button>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(User);
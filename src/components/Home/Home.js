import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../assets/img/meme.png"
import { connect } from "react-redux";


class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push("/todo")
        // }, 5000)
    }

    handleDeleteUser = (user) => {
        this.props.deleteUser(user)
    }

    handleAddNew = () => {
        this.props.creatNewUser()
    }


    render() {
        console.log(">>>>>> check props", this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>Hello World</div>
                <div>
                    <img src={logo} alt="" />
                </div>

                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <>
                                <div key={item.id}>
                                    {index + 1} - {item.name} - <button onClick={() => this.handleDeleteUser(item)}>Delete</button>
                                </div>
                            </>
                        )
                    })
                }
                <div>
                    <button onClick={() => this.handleAddNew()}>Add new</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (user) => dispatch({ type: 'DELETE_USER', payload: user }),
        creatNewUser: () => dispatch({ type: 'CREATE_USER' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
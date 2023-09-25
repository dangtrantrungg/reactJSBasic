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

    render() {
        console.log(">>>>>> check props", this.props.dataRedux)
        return (
            <>
                <div>Hello World</div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
export default connect(mapStateToProps)(withRouter(Home));
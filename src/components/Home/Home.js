import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../assets/img/meme.png"

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push("/todo")
        // }, 5000)
    }

    render() {
        return (
            <>
                <div>Hello World</div>
                <div>
                    <img src={logo} />
                </div>
            </>
        )
    }
}
export default withRouter(Home);
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";



class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/todo")
        }, 5000)
    }

    render() {
        return (
            <>
                <div>Hello World</div>
            </>
        )
    }
}
export default withRouter(Home);
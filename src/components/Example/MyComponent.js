import React from 'react';
import ChildComponent from './ChildComponent';
/**
 * 
 * class component phải được đặt tên bắt đầu bằng kí tự uppercase
 * class component là một class kế thừa react.component cho phép viết html trực tiếp trong js
 * class component sẽ return 1 JSX
 * JSX -> có thể viết HTML trực tiếp bên trong JS
 */
class MyComponent extends React.Component {
    /**
     * state sinh ra với mục đích để cập nhật realtime khi có sự thay đổi
    */

    /*khai báo 1 state chuẩn*/
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        };
    }

    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleOnClickSubmit = (event) => {
        event.preventDefault()
        console.log(">>>> check submit", this.state)
        alert("You've submitted successfully")
    }
    render() {
        return (
            <>
                {console.log(">>>>>> check render", this.state)}
                <form>
                    <label htmlFor="fname">First name:<br />
                        <input type="text" onChange={(event) => this.handleOnChangeFirstName(event)} /><br />

                        <label htmlFor="lname" />Last name:</label><br />
                    <input type="text" onChange={(event) => this.handleOnChangeLastName(event)} /><br /><br />

                    <input type="submit" onClick={(event) => this.handleOnClickSubmit(event)} />
                </form>
                <ChildComponent />
            </>
        )
    }
}

export default MyComponent;


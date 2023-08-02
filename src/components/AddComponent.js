import React from 'react';

class AddComponent extends React.Component {
    /**
  * state sinh ra với mục đích để cập nhật realtime khi có sự thay đổi
 */

    /*khai báo 1 state chuẩn*/
    constructor(props) {
        super(props);
        this.state = {
            jobName: "",
            salary: "",
        };
    }

    handleOnChangeFirstName = (event) => {
        this.setState({
            jobName: event.target.value
        })
    }

    handleOnChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
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
                    <label htmlFor="fname">Job name:<br />
                        <input type="text" onChange={(event) => this.handleOnChangeFirstName(event)} /><br />

                        <label htmlFor="lname" />Salary:</label><br />
                    <input type="text" onChange={(event) => this.handleOnChangeLastName(event)} /><br /><br />

                    <input type="submit" onClick={(event) => this.handleOnClickSubmit(event)} />
                </form>
            </>
        )
    }
}

export default AddComponent
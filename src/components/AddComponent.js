import React from 'react';

class AddComponent extends React.Component {
    /**
  * state sinh ra với mục đích để cập nhật realtime khi có sự thay đổi
 */

    /*khai báo 1 state chuẩn*/
    constructor(props) {
        super(props);
        this.state = {
            nameJob: "",
            salary: "",
        };
    }

    handleOnChangenameJob = (event) => {
        this.setState({
            nameJob: event.target.value
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnClickSubmit = (event) => {
        event.preventDefault()
        console.log(">>>> check submit", this.state)
        this.props.newJob({
            id: Math.floor(Math.random() * 999) + 1,
            nameJob: this.state.nameJob,
            salary: this.state.salary
        })
        alert("You've submitted successfully")
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job name:<br />
                        <input type="text" onChange={(event) => this.handleOnChangenameJob(event)} /><br />

                        <label htmlFor="lname" />Salary:</label><br />
                    <input type="text" onChange={(event) => this.handleOnChangeSalary(event)} /><br /><br />

                    <input type="submit" onClick={(event) => this.handleOnClickSubmit(event)} />
                </form>
            </>
        )
    }
}

export default AddComponent
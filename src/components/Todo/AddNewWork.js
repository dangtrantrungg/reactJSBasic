import React from "react";
import { toast } from 'react-toastify';

class AddNewWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nameWork: ""
        };
    }

    handleOnChangenameWork = (event) => {
        this.setState({
            nameWork: event.target.value
        })
    }

    handleOnClickSubmit = (event) => {
        event.preventDefault()

        if (!this.state.nameWork) {
            toast.error("missing parameter")
            return;
        }
        console.log(">>>> check submit", this.state)

        this.props.newWork({
            id: Math.floor(Math.random() * 999) + 1,
            nameWork: this.state.nameWork,

        })

        this.setState({
            nameWork: "",
        })
    }
    render() {
        return (
            <>
                <div className='todo-input'>
                    <input value={this.state.nameWork} type="text" onChange={(event) => this.handleOnChangenameWork(event)} ></input>
                    <button className='add' type="submit" onClick={(event) => this.handleOnClickSubmit(event)}>Add</button>
                </div>
            </>
        )
    }
}

export default AddNewWork;
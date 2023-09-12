import React from 'react';
import "../..//assets/scss/todo.scss";
import AddNewWork from './AddNewWork';

import { toast } from 'react-toastify';


class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listWork: [
                { id: "w1", nameWork: "doing homework" },
                { id: "w2", nameWork: "playing game" },
                { id: "w3", nameWork: "watching movie" }
            ],
            cloneListWork: {}
        };
    }

    addNewWork = (work) => {
        this.setState({
            listWork: [...this.state.listWork, work]
        })
        toast.success("well done!")
    }

    deleteWork = (work) => {
        let currentJob = this.state.listWork
        currentJob = currentJob.filter(item => item.id !== work.id)
        this.setState({
            listWork: currentJob
        })
        toast.success('delete successfully')
    }

    handleEdit = (work) => {
        let { cloneListWork, listWork } = this.state;
        let isEmptyObj = Object.keys(cloneListWork).length === 0;

        if (isEmptyObj === false && cloneListWork.id === work.id) {
            let listWorkCopy = [...listWork]

            let objIndex = listWorkCopy.findIndex((item => item.id === work.id));

            listWorkCopy[objIndex].nameWork = cloneListWork.nameWork

            this.setState({
                listWork: listWorkCopy,
                cloneListWork: ""
            })
            toast.success("updated successfully")
            return;
        }

        this.setState({
            cloneListWork: work
        })
    }

    handleOnChange = (event) => {
        let editCloneListWork = { ...this.state.cloneListWork }
        editCloneListWork.nameWork = event.target.value

        if (editCloneListWork === null) {
            toast.error("missing parameter")
            return;
        }
        this.setState({
            cloneListWork: editCloneListWork
        })
    }
    render() {
        let { listWork, cloneListWork } = this.state;
        let isEmptyObj = Object.keys(cloneListWork).length === 0;
        return (
            <>
                <div>ToDo App</div>
                <div className='todo-container'>
                    <AddNewWork
                        newWork={this.addNewWork}
                    />
                    {listWork && listWork.length > 0 &&
                        listWork.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.nameWork}</span>
                                        :
                                        <>
                                            {cloneListWork.id === item.id ?
                                                <span>{index + 1} - <input value={cloneListWork.nameWork} type="text"
                                                    onChange={(event) => this.handleOnChange(event)} /></span>
                                                :
                                                <span>{index + 1} - {item.nameWork}</span>
                                            }

                                        </>

                                    }

                                    <button className='edit' onClick={() => this.handleEdit(item)}>
                                        {isEmptyObj === false && cloneListWork.id === item.id ?
                                            'save' : 'edit'
                                        }
                                    </button>
                                    <button className='delete' onClick={() => this.deleteWork(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ToDoList;
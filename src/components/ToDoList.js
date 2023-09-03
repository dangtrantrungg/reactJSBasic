import React from 'react';
import "../assets/scss/todo.scss";
import AddNewWork from './Example/AddNewWork';
import { toast } from 'react-toastify';


class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listWork: [
                { id: "w1", nameWork: "doing homework" },
                { id: "w2", nameWork: "playing game" },
                { id: "w3", nameWork: "watching movie" }
            ]

        };
    }

    addNewWork = (work) => {
        this.setState({
            listWork: [...this.state.listWork, work]
        })
        toast.success("well done!")
    }
    render() {
        let { listWork } = this.state;

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
                                    <span>{index + 1} - {item.nameWork}</span>
                                    <button className='edit'>Edit</button>
                                    <button className='delete'>Delete</button>
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
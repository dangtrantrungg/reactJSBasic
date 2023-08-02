import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from '../AddComponent';
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
            arrJobs: [
                { id: "job1", nameJob: "dev", salary: "1000$" },
                { id: "job2", nameJob: "tester", salary: "500$" },
                { id: "job3", nameJob: "baoVe", salary: "300$" }
            ]

        };
    }
    render() {
        return (
            <>
                <AddComponent />

                <ChildComponent
                    name={"Trung"}
                    age={"20"}
                    job={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;


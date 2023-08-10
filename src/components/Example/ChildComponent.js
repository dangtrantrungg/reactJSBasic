import React from 'react';


class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false

        };
    }

    //biến đổi trạng thái của valid sau khi click
    handleShowHide = () => {
        this.setState({
            valid: !this.state.valid
        })
    }

    handleDelete = (job) => {
        console.log(">>>>>>> check delete", job)
        this.props.removeJob(job)
    }
    render() {
        let { listJobs } = this.props
        const { valid } = this.state
        return (
            <>
                {/**
                 * kiểm tra xem trạng thái của valid là gì
                 * nếu trạng thái là false thì hiện nút show
                 * nếu trạng thái là true thì hiện nút hide
                 * so sánh được viết dưới dạng Inline If-Else with Conditional Operator
                */}
                {valid === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    // muốn render nhiều <div> thì cần phải sử dụng JSX fragment <>.....</>
                    <>
                        <div className='job-list'>
                            {listJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.nameJob} - {item.salary}$ <></> <span onClick={() => this.handleDelete(item)}>x</span>
                                    </div>
                                )
                            })}
                        </div>

                        <div><button onClick={() => this.handleShowHide()}> Hide</button></div >
                    </>
                }



            </>
        )
    }
}

// function ChildComponent(props) {
//     let { name, age, job } = props
//     return (
//         <>
//             {console.log(">>>>>>>> check props", props)}
//             <div>this is ChildComponent {name} - {age} </div>
//             <div>
//                 {job.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.nameJob} - {item.salary}
//                         </div>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }


export default ChildComponent;


import React from 'react';


// class ChildComponent extends React.Component {
//     render() {
//         let { name, age, job } = this.props
//         return (
//             <>
//                 {console.log(">>>>>>>> check props", this.props)}
//                 <div>this is ChildComponent {name} - {age} </div>
//                 <div>
//                     {job.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.nameJob} - {item.salary}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </>
//         )
//     }
// }

function ChildComponent(props) {
    let { name, age, job } = props
    return (
        <>
            {console.log(">>>>>>>> check props", props)}
            <div>this is ChildComponent {name} - {age} </div>
            <div>
                {job.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.nameJob} - {item.salary}
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default ChildComponent;


import React from 'react';


class ChildComponent extends React.Component {
    render() {
        let { name, age } = this.props
        return (
            <>
                {console.log(">>>>>>>> check props", this.props)}
                <div>this is ChildComponent {name} {age}</div>
            </>
        )
    }
}

export default ChildComponent;


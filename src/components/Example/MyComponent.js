import React from 'react';

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
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    render() {
        return <>
            <h1>Hello, my name is {this.state.brand}</h1>
        </>

    }
}

export default MyComponent;


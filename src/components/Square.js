import React from "react";
import "./Square.css"


const Square = ({ onClick, value}) => {
    return (
        <button className="square"
        onClick={onClick}>
            {value}
        </button>
    )
}

export default Square
    // state 생성 , state 값이 변경되면 화면이 re-rendering이 된다. constructor은 생성자 
    //constructor(props){
        // super키워드가 있어야 this사용 가능 
        // super키워드는 자식클래스 내에서 부모 클래스의 생성자를 호출할 때 사용
        // 자식 클래스 내에서 부모 클래스의 메소드를 호출할 때 사용 
      //  super(props);
       // this.state = {
        //    value: null,
        //};
    //}

  

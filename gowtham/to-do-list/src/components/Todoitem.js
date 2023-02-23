import React from "react";

const Todoitem =(props) => {
    return(
    <div onClick={()=> props.deleteitems(props.id)}>
        <li>{props.text}</li>
    </div>
    )
}


export default Todoitem
import React from "react";

 function Functioncom(props){
    console.log(props)
    return(
        <>
        {/* <h1>welcome react {props.exterData} {props.exData}</h1> */}
        <div>
        {props.exData?.map(title => {
          return <div>{title}</div>;
        })}
      </div>
      </>
    );
};

export default Functioncom;
import React, {useState} from 'react';

const InputArea =(props)=>{
const [inputText, setinputText] = useState ("");

const handlechange =(event) => {
    setinputText(event.target.value);
}
return(
    <div className="from">
        <input type="text" onChange={handlechange} value={inputText} />
        <button onClick={ () =>{
            props.additems(inputText);
            setinputText(" ");
            }}>
            <span>add</span>
        </button>
    </div>
);
};

export default InputArea;
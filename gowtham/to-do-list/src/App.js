import './App.css';
import InputArea from "./components/InputArea";
import { useState } from 'react';
import Todoitem from './components/Todoitem';

function App() {
  const [items, setitems] = useState ([]);

  const additems = (inputText) => {
    setitems((previtems) => {
      return[...previtems, inputText];
    });
  };

  const deleteitems=(id)=>{
    setitems((previtems)=>{
    return previtems.filter((items,index)=>{
      return index!==id;
    })
    })
}
 
  return (
    <div className="container">
      <div className="header">
      <h1>To-do list</h1>
      
      <InputArea additems={additems} />
      <div>
        <ul>
         {
           items.map((items,index) =>{
             return <Todoitem key={index} text={items} deleteitems={deleteitems} id={index}/>
            }) 
            }
        </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

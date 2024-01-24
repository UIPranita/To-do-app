import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [todos, setTodos] = useState([]);
   const [input, setInput] = useState('');
   const [alert, setAlert] = useState(null);
   const [editIndex, setEditIndex] = useState(null);
  
   
 const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
     setAlert(null);
 }, 1000)
 }
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (input !== '') {
      if (editIndex !== null) {
        
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = input;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        
        setTodos([...todos, input]);
      }
      setInput('');
    }   
      else{
          showAlert('Please enter a todo', 'warning');
         }
   
  };


const handleEditTodo = (index) => {
  
  setInput(todos[index]);
  setEditIndex(index);
};

const handleDeleteTodo = (index) => {
  
  const updatedTodos = [...todos];
  updatedTodos.splice(index, 1);
  setTodos(updatedTodos);
};


  return (
    
    <>
    <Alert alert={alert} />
    <div className="container">
    
    <Header
        headerTitle="My To-Do List"
        input={input}
        onInputChange={(event) => setInput(event.target.value)}
        onButtonClick={handleAddTodo}
        
      />
      <hr/>
      
        
      <div id="body">
      {todos.map((todo, index) => ( 
        <ol key={index}>
        <div  className="todo-item">
        <p className={`value ${editIndex === index ? 'editing' : ''}`}>
          {index + 1}. {todo}
        </p>
        <button className="edit" onClick={() => handleEditTodo(index)}> <i className="fas fa-edit"></i>Edit</button>
        <button onClick={() => handleDeleteTodo(index)}><i className="fas fa-trash-alt"></i>Delete</button>
      </div></ol>
      ))}
      </div>
            </div>


    </>
  );
}

export default App;

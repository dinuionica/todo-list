import './App.css';
import { useState } from 'react'
import DisplayTodos from './DisplayTodos'


/* The main app component */
function App() {
  /* constants and hooks used for functionality */
  const [toDos, setToDos] = useState([])
  const [inputValue, setInputValue] = useState("")

  /* The function that changes the value of the input form */
  const changeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  /* The function that adds a new todo to the list */
  const addTodos = (name) => {
    /* create a new array and add the new todo */
    let newArrayTodos = []
    for (let i = 0; i < toDos.length; ++i) {
      newArrayTodos.push(toDos[i]);
    }
    newArrayTodos.push(name)
    /* update the array of todos */
    setToDos(newArrayTodos)
    setInputValue('')
  }

  return (
    <div className="container">
      <div className="row">
        <DisplayTodos todoList={toDos} setData={setToDos}></DisplayTodos>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row">
          <label className="label-text">Enter a new task</label>
          <input className="form-control mb-5" type="text" onChange={changeInputValue} value={inputValue} ></input>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary" id="btn-add" onClick={() => addTodos(inputValue)}>Add new todo</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

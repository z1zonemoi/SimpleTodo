import React, { useEffect, useState } from "react";
import Insert from "./components/Insert";
import ToDoContainer from "./components/ToDoContainer";
import TodoList from "./components/TodoList";


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/Todos')
    .then(res => {
      if(!res.ok){
        throw Error('찾을 수 없음')
      }
      return res.json();
    })
    .then(data => {
      setTodos(data);
    })
    .catch(err => {
      throw Error('error')
    })
  },[])

  return (
    <ToDoContainer>
      <Insert/>
      <TodoList todos={todos}/>
    </ToDoContainer>
  );
}

export default App;

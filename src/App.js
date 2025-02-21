import { useState,useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";

function App() {
  const [todos,setTodos]=useState([
    {id: 1,name: "Todo1",completed: true },
  ]);

  const todoNameRef = useRef();
  const handleAddTodo = () => {
    //タスク
    //console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value;
    if(name === "" ) return;
    //同じ名前
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.name === name );
    console.log( name )
    console.log( "-----" )
    // 重複チェック: 同じタスクが既に存在する場合は追加しない
    const newTask = name;
    if (todos.some(todo => todo.name === newTask.trim())) {
      alert('同じタスクが既に存在します');
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos,{id: uuidv4(), name: name, completed:false}]
    });
    todoNameRef.current.value=null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id );
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <>
   　　<h1>Todos(Isobe)</h1>
      <TodoList todos={todos} toggleTodo = {toggleTodo} />
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスク追加</button>
      <button onClick={handleClear}>タスク削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}
export default App;

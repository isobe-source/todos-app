import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos,setTodos]=useState(["テスト１","テスト２"]);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text"/>
      <button>タスク追加</button>
      <button>タスク削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}
export default App;

import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [taskName, setTask] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setcompleteTodos] = useState(["a3", "a4"]);
  const onChangeTodoText = (event) => {
    setTask(event.target.value);
  };
  const registTask = () => {
    if (taskName === "") return;
    const newTodos = [...incompleteTodos, taskName];
    setincompleteTodos(newTodos);
    setTask("");
  };

  const taskDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };
  const completeTask = (index) => {
    const newIncompleateTodo = [...incompleteTodos];
    newIncompleateTodo.splice(index, 1);
    const newCompleateTodo = [...completeTodos, completeTodos[index]];
    setincompleteTodos(newIncompleateTodo);
    setcompleteTodos(newCompleateTodo);
  };

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODO"
          value={taskName}
          onChange={onChangeTodoText}
        />
        <button onClick={registTask}>登録</button>
      </div>
      <div className="incomplete-area ">
        <p>完了タスク</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={index} className="list_row">
                <li>{todo}</li>
                <button onClick={() => completeTask(index)}>完了</button>
                {/* 関数に値を渡してあげる時はアロー関数で呼び出してあげる必要がある */}
                <button onClick={() => taskDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p>未完了タスク</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={index} className="list_row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;

import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";

const App = () => {
  const [taskName, setTask] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);
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
    const newCompleateTodo = [...completeTodos, incompleteTodos[index]];
    setincompleteTodos(newIncompleateTodo);
    setcompleteTodos(newCompleateTodo);
  };

  const backTask = (index) => {
    const newCompleateTodo = [...completeTodos];
    newCompleateTodo.splice(index, 1);
    const newIncompleateTodo = [...incompleteTodos, completeTodos[index]];
    setcompleteTodos(newCompleateTodo);
    setincompleteTodos(newIncompleateTodo);
  };

  return (
    <>
      <InputTodo
        taskName={taskName}
        onChange={onChangeTodoText}
        onClick={registTask}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>エラーメッセージ</p>
      )}
      <IncompleteArea
        incompleteTodos={incompleteTodos}
        completeTask={completeTask}
        taskDelete={taskDelete}
      />
      <CompleteArea completeTodos={completeTodos} onClick={backTask} />
    </>
  );
};

export default App;

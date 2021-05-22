import React from "react";

export const IncompleteArea = (props) => {
  const { incompleteTodos, completeTask, taskDelete } = props;
  return (
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
  );
};

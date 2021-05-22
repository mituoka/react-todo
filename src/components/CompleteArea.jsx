import React from "react";

export const CompleteArea = (props) => {
  const { completeTodos, onClick } = props;
  return (
    <div className="complete-area">
      <p>未完了タスク</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={index} className="list_row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

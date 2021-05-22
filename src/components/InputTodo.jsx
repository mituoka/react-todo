import React from "react";

export const InputTodo = (props) => {
  const { taskName, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="TODO"
        value={taskName}
        onChange={onChange}
        input
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>
        登録
      </button>
    </div>
  );
};

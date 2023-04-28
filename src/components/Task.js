import React from "react";

function Task({ text, category, onDelete}) {
  function handleDelete(){
    onDelete(text)
  }

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;

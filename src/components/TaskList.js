import React from "react";
import Task from "./Task";


function TaskList( { tasks, onDeleteTask, newCategory="All" } ) {
  
  const tasksToDisplay = tasks.filter(task => {
    if (newCategory === "All") return true;
    return task.category === newCategory;
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
        {tasksToDisplay.map(task => {
          return <Task key={task.text} text={task.text} category={task.category} onDelete={onDeleteTask}/>
        })}
      
    </div>
  );
}

export default TaskList;

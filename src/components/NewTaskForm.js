import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState(
    {
      text: "",
      category: "Code",
    }


  )
  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({text: formData.text, category: formData.category})
    setFormData(
      {
        text: "",
        category: "code",
      }
    )
  }

  function handleChange(event){
    const key = event.target.name;
    setFormData(
      { ...formData,
        [key]: event.target.value
      }
    )
  }
  const categoriesOption = categories.filter(category => category !== "All").map(category => <option value={ category } key={ category }>{category}</option>)

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {categoriesOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

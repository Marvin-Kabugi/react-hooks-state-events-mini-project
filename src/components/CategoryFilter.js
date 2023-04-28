import React, { useState } from "react";

function CategoryFilter({ categories, onChangeCategory }) {
  const [select, setSelect] = useState(null)

  function handleClick(category){
    onChangeCategory(category)
    setSelect(category)
  }

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {
      categories.map(category => <button key={ category } className={ select === category ? "selected" : "" }  onClick={() => handleClick(category)}>{category}</button>)
      }
    </div>
  );
}

export default CategoryFilter;

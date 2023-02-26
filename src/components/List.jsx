import React from 'react'
import TodoItem from './TodoItem';

const List = ({todo,handleChange,handleOpenClick,handleDeleteClick})=>{
  // console.log(todo,handleChange,handleOpenClick,handleDeleteClick);
  console.log(todo);
  return (
    <div>
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChange={handleChange}
        handleOpenClick={handleOpenClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  )
}

export default List
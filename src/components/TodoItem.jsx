import React from 'react'

const TodoItem = ({todo,handleChange,handleOpenClick,handleDeleteClick}) => {
  return (
    <div>
      <span>{todo.title}</span>
      <select value={todo.status} onChange={(e)=> handleChange(todo,e)}>
        <option value='notStarted'>未着手</option>
        <option value='inProgress'>作業中</option>
        <option value='done'>完了</option>
      </select>
      <button onClick={()=> handleOpenClick(todo)}>編集</button>
      <button onClick={()=> handleDeleteClick(todo)}>削除</button>
    </div>
  )
}

export default TodoItem
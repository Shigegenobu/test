import React from 'react'

const List = (todo,handleChange,handleOpenCkick,handleDeleteCkick)=>{
  // console.log(todo,handleChange,handleOpenCkick,handleDeleteCkick);
  return (
    <div>
      <li key={todo.id}>
          <span>{todo.title}</span>
          <select value={todo.status} onChange={(e)=> handleChange(todo,e)}>
            <option value='notStarted'>未着手</option>
            <option value='inProgress'>作業中</option>
            <option value='done'>完了</option>
          </select>
          <button onClick={()=> handleOpenCkick(todo)}>編集</button>
          <button onClick={()=> handleDeleteCkick(todo)}>削除</button>
      </li>
    </div>
  )
}

export default List
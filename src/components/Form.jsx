import React from "react";


const Form = ({
  type,
  label,
  title,
  handleChange,
  handleClick,
  handleClick2 =null,
}) => {
  return (
    <>
      <input type={type} label={label} value={title} onChange={handleChange} />
      {handleClick2 === null ? (
        <button onClick={handleClick}>作成</button>
      ) : (
        <>
          <button onClick={handleClick}>編集を保存</button>
          <button onClick={handleClick2}>キャンセル</button>
        </>
      )}
    </>
  );
};

export default Form;

// {(()=>{
//         if(!isEditable){
//           {/* 新規作成フォーム */}
//           return (
//            <Button type='text' label="タイトル" todoTitle={todoTitle} handleChange={handleAddFormChanges} handleClick={handleAddTodo} />
//           )
//         } else {
//           {/* 編集フォーム */}
//           return (
//             <>
//               <input
//                 type="text"
//                 label="新しいタイトル"
//                 value={newTitle}
//                 onChange={handleEditFormChanges}
//               />
//               <button onClick={handleEditTodo}>編集を保存</button>
//               <button onClick={handleCloseEditForm}>キャンセル</button>
//             </>
//           )
//         }
//       })()}
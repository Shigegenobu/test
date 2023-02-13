import React from "react";

const Form = ({
  type,
  label,
  title,
  handleChange,
  handleClick,
  handleClick2 = null,
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

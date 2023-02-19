import React from "react";

const Button = ({type,label,todoTitle,handleChange,handleClick}) => {
  // const {type,label,todoTitle,handleChange,handleClick} = props;
  // console.log(props)
  return (
    <>
    <input
      type={type}
      label={label}
      value={todoTitle}
      onChange={handleChange}
    />
    <button onClick={handleClick}>作成</button>
  </>
  )
}

export default Button
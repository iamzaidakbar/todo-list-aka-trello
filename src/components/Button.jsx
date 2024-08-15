import React from 'react'
import { LuPlusCircle } from "react-icons/lu";

const Button = ({btnText, onClick}) => {
  return (
    <button onClick={onClick} className='Btn__new__task d-flex align-items-center'>
      <LuPlusCircle />
      {btnText || "Text Here"}
    </button>
  )
}

export default Button
import React from 'react'

export const Button = ({label, cls, handleOnClick}) => {

  return (
    <div className={"btn" + cls} onClick={()=>handleOnClick(label)}>{label}</div>
  )
}

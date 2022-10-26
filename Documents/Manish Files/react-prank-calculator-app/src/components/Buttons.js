import React from 'react'

export const Buttons = ({label , cls, handleOnClick}) => {
    return (
        <div className={"btn" + cls} onClick = {()=>handleOnClick(label)} >{label}</div>

  )
}

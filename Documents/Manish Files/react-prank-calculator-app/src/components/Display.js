import React from 'react'

export const Display = ({str , isPrank}) => {
const cls = isPrank ? "display prank" : "display";

  return (
    <div className={cls}>{str || "0.00"}</div>
  )
}

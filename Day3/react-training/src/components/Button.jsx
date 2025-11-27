import React from 'react'

export const Button = ({label,action}) => {
  return (
    <div>
        <button onClick={action}  >{label}</button>
    </div>
  )
}

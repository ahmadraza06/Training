import React from 'react'

export const Input = ({value,placeholder,onChange}) => {
  return (
    <>
        <input style={{fontSize:"1rem",padding:"2px"}} value={value} placeholder={placeholder} onChange={onChange} type="text"  />
    </>
  )
}

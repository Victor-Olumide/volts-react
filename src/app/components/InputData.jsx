import React from 'react'

export default function InputData({type, placeholder}) {
  return (
    <input type={type} name={type} id={type} placeholder={placeholder} className='block w-3/5 p-6 border rounded-md'/>
)
}

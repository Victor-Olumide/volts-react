import React from 'react'

export default function FormButton({data}) {
  return (
    data === "sign up" ? 
    <button type='submit' className="w-3/5 p-6 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300 cursor-pointer">{data}</button>
    : <button type='submit' className="w-3/5 p-6 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer">{data}</button>
  )
}

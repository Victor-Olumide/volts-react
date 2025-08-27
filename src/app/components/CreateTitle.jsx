import React from 'react'

export default function CreateTitle({ title, color, tc}) {
  return (
    <h2 className={`${tc} uppercase text-3xl text-center py-4 border-b-8 mb-3 ${color}`}>{title}</h2>
  )
}

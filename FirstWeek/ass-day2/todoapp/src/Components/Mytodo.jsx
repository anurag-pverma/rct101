import React, { useState } from 'react'

export default function Mytodo() {
    const [value, setValue] = useState("")
    const [todo, setTodo] = useState([])
  return (
    <div>

    <input type="text" value={value} placeholder="Enter somthething here" />
    



    </div>
  )
}

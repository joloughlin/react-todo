import React, { useState } from 'react';

export const TodoInput = ({ input, setInput, setItems, items }) => (
  <div>
    <input className='itemInput' value={input} onChange={(event) => setInput(event.target.value)} />
    <button onClick={() => {
      setItems([...items, input])
      setInput('')
    }}>Add</button>
  </div>
)

export const TodoItem = ({ item }) => (
  <li>
    <input type="checkbox" />
    {item}
  </li>
)

export const TodoList = ({ todoItems }) => (
  <ul>
    {todoItems && todoItems.map((item, index) =>
      <TodoItem key={index} item={item} />
    )}
  </ul>
)

export const TodoContainer = () => {
  const [items, setItems] = useState(['first todo item'])
  const [input, setInput] = useState('')

  return (
    <div className="todoContainer">
      <TodoInput input={input} setInput={setInput} setItems={setItems} items={items} />
      <TodoList todoItems={items} />
    </div>
  )
}
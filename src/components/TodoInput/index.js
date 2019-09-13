import React, { useState } from 'react';

const TodoInput = ({ setItems, items }) => (
  <div>
    <input className='itemInput' value={term} onChange={(event) => setInput(event.target.value)} />
    <button onClick={() => setItems([...items, term])}>Add</button>
  </div>
)

export default TodoInput;
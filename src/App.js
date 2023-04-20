import React, { useState } from 'react'
import './App.css';
function App() {
  const [state, setState] = useState([])
  const [title, setTitle] = useState('')

  const inputTextHandler = (event) => {
    setTitle(event.target.value)
  }

  const clickAddHandler = () => {
    const newState = {
      title: title
    }

    setState([...state, newState])
    setTitle('')
  }
  return (
    <>
      <div className='inputBox'>
        <input value={title} onChange={inputTextHandler} />
        <button onClick={clickAddHandler}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className='contentWrap'>
        {
          state.map((item) => {
            return (
                <div className='content'>
                  <p>{item.title}</p>
                </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
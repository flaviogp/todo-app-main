import React, { useState } from 'react'
import { TodoList } from '../interfaces/interfaces'

interface InputProps {
  setList: (arg:TodoList[]) => void
  mode: string;
}

const Input = ({setList, mode}: InputProps) => {
  const [checkFull, setCheckFull] = useState(false)

  const checkInputStyle = `
  after:flex after:justify-center 
  after:items-center
  after:content-check 
  after:bg-gradient-to-b 
  after:from-checkbackground-gradient-top 
  after:to-checkbackground-gradient-bottom
  after:border-none
`

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(!e.currentTarget.value) return;
    if(e.key !== 'Enter') return;
    const storedList = localStorage.getItem('todoList')
    
    if(!storedList || JSON.parse(storedList).length === 0) {
      const newTask = {id: 0, task:e.currentTarget.value, checked: false}
      localStorage.setItem('todoList', JSON.stringify([newTask]))
      setList([newTask])
      return;
    }
    
    const oldList = JSON.parse(storedList)
    const lastId = oldList[oldList.length-1].id;

    const newTask = {id: lastId + 1 , task:e.currentTarget.value , checked: false}

    localStorage.setItem('todoList', JSON.stringify([...oldList, newTask]))
    setList([...oldList, newTask])

    e.currentTarget.value = ''

  }

  const handleClick = () => {
    const stored = localStorage.getItem('todoList')
    if (!stored) return;
    const list = JSON.parse(stored) as TodoList[]
    list.map(task => task.checked = !checkFull ? true : false)
    localStorage.setItem('todoList', JSON.stringify(list))
    setCheckFull(!checkFull)
    setList(list)
  }


  return (
    <label htmlFor="todo" className={`flex items-center w-full h-[50px] px-5 gap-5 rounded-md ${mode === 'light' ? 'bg-very-light-gray' : 'bg-very-dark-desaturated-blue'}`}>
        <div 
        className={`
          relative
          w-[20px] h-[20px] rounded-full cursor-pointer
          after:w-[20px] after:h-[20px] after:border-2
          after:absolute after:top-0
          after:left-0 after:rounded-full
          ${checkFull && checkInputStyle}
          `}
         onClick={() => handleClick()}></div>
        <input type="text" name="todo" id="todo" className={`outline-none bg-transparent w-[90%] ${mode === 'light' ? 'text-very-dark-desaturated-blue' : 'text-dark-grayish-blue'}`} placeholder='Create a new todo...'
          onKeyDown={e => handleKeyDown(e)}
        />
    </label>
  )
}

export default Input
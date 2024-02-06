import React from 'react'
import { TodoList } from '../interfaces/interfaces'

interface InputProps {
  setList: (arg:TodoList[]) => void
}

const Input = ({setList}: InputProps) => {


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


  return (
    <label htmlFor="todo" className="flex items-center w-full h-[50px] px-5 gap-5 bg-very-light-gray rounded-md">
        <div className='w-[20px] h-[20px] rounded-full border'></div>
        <input type="text" name="todo" id="todo" className='outline-none bg-transparent w-[90%]' placeholder='Create a new todo...'
          onKeyDown={e => handleKeyDown(e)}
        />
    </label>
  )
}

export default Input
import { useState } from 'react'
import CrossIcon from '../assets/images/icon-cross.svg'
import { TodoList } from '../interfaces/interfaces'


interface ListProps {
    list: TodoList[],
    setList: (arg:TodoList[]) => void
}

const List = ({list, setList}: ListProps) => {

    const handleChekTodo = (id: number) => {
        const newList = [...list]
        const taskIndex = newList.findIndex(task => task.id === id);
        const newTask = {...newList[taskIndex], checked: !newList[taskIndex].checked}
        newList[taskIndex] = newTask
        setList([...newList])

    }
    const checkInputStyle = `
        after:flex after:justify-center 
        after:items-center
        after:content-check 
        after:bg-gradient-to-b 
        after:from-checkbackground-gradient-top 
        after:to-checkbackground-gradient-bottom
        after:border-none
    `


  return (
    <ul className='container flex flex-col bg-very-light-gray rounded-md'>
    { list.length >= 1 && list.map((todo, index) => (
            <li 
                key={`${todo.task}-${index}`}
                className='flex w-full gap-5 bg-transparent border-t-2 h-[50px] items-center justify-between p-5'
            >
                <label htmlFor={`item-${index}`} className='flex gap-5 cursor-pointer'>
                    <input 
                        type="checkbox" 
                        name={`item-${index}`} 
                        id={`item-${index}`} 
                        className={`relative appearance-none mr-[10px]
                            after:w-[20px] after:h-[20px] after:border-2
                            after:absolute after:top-[2px] 
                            after:left-0 after:rounded-full ${todo.checked && checkInputStyle}`}
                        onChange={()=> handleChekTodo(todo.id)}
                    />
                    <p className={`${todo.checked && 'line-through text-light-grayish-blue'}`}>{todo.task}</p>
                </label>
                <img src={CrossIcon} alt="remove todo"  className='w-[17px] h-[17px] flex justify-self-end cursor-pointer'/>
            </li>
        ))
    }
    </ul>
  )
}

export default List
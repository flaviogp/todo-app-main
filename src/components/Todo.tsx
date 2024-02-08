import CrossIcon from '../assets/images/icon-cross.svg'
import { TodoList } from '../interfaces/interfaces'

interface TodoProps {
    todo: TodoList
    index: number
    mode: string;
    handleChekTodo: (arg: number) => void
    handleDelete: (arg: number) => void

}

const Todo = ({index, todo, mode, handleChekTodo, handleDelete}: TodoProps) => {


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
    <div 
    key={`${todo.task}-${index}`}
    className='flex w-full gap-5 bg-transparent h-[50px] items-center justify-between p-5'
>
    <label htmlFor={`item-${index}`} className='flex gap-5 cursor-pointer w-full'>
        <input 
            type="checkbox" 
            name={`item-${index}`} 
            id={`item-${index}`} 
            className={`relative appearance-none mr-[10px]
                after:w-[20px] after:h-[20px] after:border-2
                after:absolute after:top-[2px] cursor-pointer
                after:left-0 after:rounded-full ${todo.checked && checkInputStyle}`}
            onChange={()=> handleChekTodo(todo.id)}
        />
        <p 
        className={`
            ${todo.checked ? 
                `${
                    mode == 'light' ? 
                    'line-through text-light-grayish-blue' :
                    'line-through text-very-dark-grayish-blue'                                    
                }`
                : 
                `${
                    mode == 'light' ? 
                    'text-very-dark-grayish-blue' :
                    'text-light-grayish-blue-themeDark'                                    
                }`
            }
            `}
        >{todo.task}</p>
    </label>
    <img src={CrossIcon} alt="remove todo" onClick={() => handleDelete(todo.id)} className='w-[17px] h-[17px] flex justify-self-end cursor-pointer'/>
</div>

  )
}

export default Todo
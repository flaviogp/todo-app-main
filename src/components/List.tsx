
import CrossIcon from '../assets/images/icon-cross.svg'
import { TodoList } from '../interfaces/interfaces'


interface ListProps {
    list: TodoList[],
    setList: (arg:TodoList[]) => void
}

const List = ({list, setList}: ListProps) => {

    const getStoredList = () => {
        const stored = localStorage.getItem('todoList')
        if(!stored) return [];
        return JSON.parse(stored) as TodoList[]
    }

    const handleDelete = (id: number) => {
        const newList = getStoredList()
        const taskIndex = newList.findIndex(task => task.id === id);
        newList.splice(taskIndex, 1)
        localStorage.setItem('todoList', JSON.stringify(newList))
        setList(newList)
    }
    
    const handleChekTodo = (id: number) => {
        const newList = getStoredList()
        const taskIndex = newList.findIndex(task => task.id === id);
        const newTask = {...newList[taskIndex], checked: !newList[taskIndex].checked}
        newList[taskIndex] = newTask
        setList([...newList])
        localStorage.setItem('todoList', JSON.stringify(newList))
        
    }
    
    const handleClear = () => {
        const newList = getStoredList()
        const incomplete = newList.filter(task => task.checked === false)

        localStorage.setItem('todoList', JSON.stringify(incomplete))
        setList(incomplete)
        
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
    <ul className='
        max-h-[320px]
        container flex flex-col 
        bg-very-light-gray rounded-md 
        '>

        <div className='scroll max-h-[280px] overflow-y-auto 
        [&>*:not(:first-child)]:border-t-2'>
            { list.length >= 1 && list.map((todo, index) => (
                    <li 
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
                            <p className={`${todo.checked ? 'line-through text-light-grayish-blue' : ' text-very-dark-grayish-blue'}`}>{todo.task}</p>
                        </label>
                        <img src={CrossIcon} alt="remove todo" onClick={() => handleDelete(todo.id)} className='w-[17px] h-[17px] flex justify-self-end cursor-pointer'/>
                    </li>
                
                ))
            }
        </div>
    {  list.length >= 1 ?
            <li className='flex justify-between p-5 text-dark-grayish-blue'>
                <p >{`${list.length} items left`}</p>
                <p className='cursor-pointer' onClick={() => handleClear()}>Clear Completed</p>
            </li>
        :
            <li className='flex justify-center p-5 text-dark-grayish-blue'>
                <p>No more Tasks</p>
            </li>
    }
    </ul>
  )
}

export default List
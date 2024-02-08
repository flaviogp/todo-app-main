
import { TodoList } from '../interfaces/interfaces'
import Todo from './Todo';


interface ListProps {
    list: TodoList[],
    setList: (arg:TodoList[]) => void
    mode: string;
    focus: string;
}

const List = ({list, setList, mode, focus}: ListProps) => {
    const listAll = [...list];
    const listActive = list.filter(todo => todo.checked === false)
    const listCompleted = list.filter(todo => todo.checked === true)

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

  return (
    <ul className={`
        max-h-[320px]
        container flex flex-col 
        ${mode === 'light' ? 
            'bg-very-light-gray' : 
            'bg-very-dark-desaturated-blue'
        }
        rounded-md 
        `}>

        <li className='
            scroll max-h-[280px] overflow-y-auto
            [&>*:not(:first-child)]:border-t-[1px]
            [&>*:not(:first-child)]:border-light-grayish-blue-themeDark 
            '
        >
            {
                focus === 'all' && listAll.map((todo, index) => (
                
                    <Todo 
                        todo={todo} 
                        index={index} 
                        mode={mode} 
                        handleChekTodo={handleChekTodo} 
                        handleDelete={handleDelete}
                        />
                   ))
            }
            {
                focus === 'active' && listActive.map((todo, index) => (
                
                    <Todo 
                        todo={todo} 
                        index={index} 
                        mode={mode} 
                        handleChekTodo={handleChekTodo} 
                        handleDelete={handleDelete}
                        />
                   ))
            }
            {
                focus === 'completed' && listCompleted.map((todo, index) => (
                
                    <Todo 
                        todo={todo} 
                        index={index} 
                        mode={mode} 
                        handleChekTodo={handleChekTodo} 
                        handleDelete={handleDelete}
                        />
                   ))
            }

        </li>
    {  
    
        focus === 'all' ?
            listAll.length >= 1 ?
                <li className='flex justify-between p-5 text-dark-grayish-blue border-t-[1px] border-light-grayish-blue-themeDark'>
                    <p >{`${listAll.length} items left`}</p>
                    <p className='cursor-pointer' onClick={() => handleClear()}>Clear Completed</p>
                </li>
            :
                <li className='flex justify-center p-5 text-dark-grayish-blue'>
                    <p>No more Tasks</p>
                </li>
        : focus === 'active' ?
            listActive.length >= 1 ?
                <li className='flex justify-between p-5 text-dark-grayish-blue border-t-[1px] border-light-grayish-blue-themeDark'>
                    <p >{`${listActive.length} items left`}</p>
                    <p className='cursor-pointer' onClick={() => handleClear()}>Clear Completed</p>
                </li>
            :
                <li className='flex justify-center p-5 text-dark-grayish-blue'>
                    <p>No More Active Tasks</p>
                </li>
        : focus === 'completed' &&
            listCompleted.length >= 1 ?
                <li className='flex justify-between p-5 text-dark-grayish-blue border-t-[1px] border-light-grayish-blue-themeDark'>
                    <p >{`${listCompleted.length} items left`}</p>
                    <p className='cursor-pointer' onClick={() => handleClear()}>Clear Completed</p>
                </li>
            :
                <li className='flex justify-center p-5 text-dark-grayish-blue'>
                    <p>No More Completed Tasks</p>
                </li>

    }
    </ul>
  )
}

export default List
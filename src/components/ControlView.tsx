import { useState } from "react"
import { TodoList } from "../interfaces/interfaces"

interface ControlViewProps {
  setList: (arg: TodoList[]) => void
}

const ControlView = ({setList}: ControlViewProps) => {
  const [focus, setFocus] = useState('all')

  const listFocus = (id: string) => {
    const stored = localStorage.getItem('todoList');

    if(!stored) return

    const list = JSON.parse(stored) as TodoList[]

    switch(id){
      case 'all':
        setList([...list])
        break;
      case 'active': {
        const newList = list.filter(task => !task.checked)
        setList(newList)
        break;
      }
      case 'completed': {
        const newList = list.filter(task => task.checked)
        setList(newList)
        break;
      }
    }
  }

  const handleClick = (e:  React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    setFocus(id);

    listFocus(id);
  }


  return (
    <div className="w-full p-5 bg-very-light-gray rounded-md absolute bottom-8">
      <ul 
        className={` 
          [&>*]:cursor-pointer
           w-full flex justify-center
          gap-5 text-very-dark-grayish-blue

        `}>

        <li id="all"
          className={`${focus === 'all' && 'text-blue-700'}`}
          onClick={(e) => handleClick(e)}
          >
          All
        </li>
        <li id="active" 
          className={`${focus === 'active' && 'text-blue-700'}`}
          onClick={(e) => handleClick(e)}
          >
          Active
        </li>
        <li id="completed" 
          className={`${focus === 'completed' && 'text-blue-700'}`}
          onClick={(e) => handleClick(e)}
        >
          Completed
        </li>
      </ul>
    </div>
  )
}

export default ControlView

import { TodoList } from '../interfaces/interfaces'
import ControlView from './ControlView'
import Input from './Input'
import List from './List'

interface MainProps {
  list: TodoList[],
  setList: (arg:TodoList[]) => void
}

const Main = ({list, setList}: MainProps) => {
  return (
    <main className="relative container h-full max-w-[600px] w-full flex flex-col gap-5 ">
        <Input setList={setList}/>
        <List list={list} setList={setList}/>
        <ControlView setList={setList}/>
    </main>
  )
}

export default Main
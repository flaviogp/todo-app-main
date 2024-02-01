
import { TodoList } from '../interfaces/interfaces'
import Input from './Input'
import List from './List'

interface MainProps {
  list: TodoList[],
  setList: (arg:TodoList[]) => void
}

const Main = ({list, setList}: MainProps) => {
  return (
    <main className="container max-w-[600px] w-full flex flex-col gap-5 ">
        <Input setList={setList}/>
        <List list={list} setList={setList}/>
    </main>
  )
}

export default Main
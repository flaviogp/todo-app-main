
import { TodoList } from '../interfaces/interfaces'
import Header from './Header'
import Main from './Main'

interface ContainerProps {
    list: TodoList[],
    setList: (arg:TodoList[]) => void
}

const Container = ({list, setList}: ContainerProps) => {
  return (
    <div className="container max-w-[600px] w-[90%] h-full flex flex-col gap-5">
        <Header />
        <Main list={list} setList={setList} />
    </div>
  )
}

export default Container
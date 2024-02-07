
import { TodoList } from '../interfaces/interfaces'
import Header from './Header'
import Main from './Main'

interface ContainerProps {
    list: TodoList[],
    setList: (arg:TodoList[]) => void;
    setMode: (arg: string) => void;
    mode: string;
}

const Container = ({list, setList, setMode, mode}: ContainerProps) => {
  return (
    <div className="container max-w-[600px] w-[90%] h-full flex flex-col gap-5">
        <Header setMode={setMode} mode={mode}/>
        <Main list={list} setList={setList} setMode={setMode} mode={mode} />
    </div>
  )
}

export default Container
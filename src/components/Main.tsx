
import { useState } from 'react'
import { TodoList } from '../interfaces/interfaces'
import ControlView from './ControlView'
import Input from './Input'
import List from './List'

interface MainProps {
  list: TodoList[],
  setList: (arg:TodoList[]) => void
  mode: string;
}

const Main = ({list, setList, mode}: MainProps) => {

  const [focus, setFocus] = useState('all')

  return (
    <main className="relative container h-full max-w-[600px] w-full flex flex-col gap-5 ">
        <Input setList={setList} mode={mode} />
        <List list={list} setList={setList} mode={mode} focus={focus}/>
        <ControlView setList={setList} mode={mode} focus={focus} setFocus={setFocus}/>
    </main>
  )
}

export default Main
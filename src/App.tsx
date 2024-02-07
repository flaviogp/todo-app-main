import { useEffect, useState } from "react"
import Container from "./components/Container"
import { TodoList } from "./interfaces/interfaces"


function App() {

  const [list, setList] = useState<TodoList[]>([])
  const [mode, setMode] = useState('light');


  useEffect(()=> {
    if(!localStorage.getItem('todoList')) return;
    const storedList = localStorage.getItem('todoList')
    if(!storedList) return
    const todoList =  JSON.parse(storedList)
    setList(todoList);
  }, [])


  return (
    <div className={`w-[100vw] h-[100vh]  bg-no-repeat bg-contain  flex justify-center pt-12 ${mode === 'light' ? 'bg-background-light-mobile md:bg-background-light-desktop bg-very-light-grayish-blue' : 'bg-background-dark-mobile md:bg-background-dark-desktop bg-very-dark-blue'}`}>
      <Container list={list} setList={setList} setMode={setMode} mode={mode}/>
    </div>
  )
}

export default App

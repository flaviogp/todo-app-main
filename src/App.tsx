import { useEffect, useState } from "react"
import Container from "./components/Container"
import { TodoList } from "./interfaces/interfaces"


function App() {

  const [list, setList] = useState<TodoList[]>([])



  useEffect(()=> {
    if(!localStorage.getItem('todoList')) return;
    const storedList = localStorage.getItem('todoList')
    if(!storedList) return
    const todoList =  JSON.parse(storedList)
    setList(todoList);
  }, [])


  return (
    <div className="w-[100vw] h-[100vh] bg-very-light-grayish-blue bg-background-light-mobile bg-no-repeat bg-contain flex justify-center pt-12">
      <Container list={list} setList={setList} />
    </div>
  )
}

export default App

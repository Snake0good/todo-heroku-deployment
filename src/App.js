import { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 } from 'uuid';
import { FaPlus, FaTrashAlt } from 'react-icons/fa'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()  // <=== let's us access references on the page like the input on the page

  // loads the todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])


  // this is like local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      // console.log(v4())
      return [...prevTodos, { id:v4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div className='bg-indigo-500 w-screen h-screen flex place-content-center pr-5 pl-5 overflow-hidden'>
      <div className="App bg-white shadow-xl shadow-indigo relative rounded-xl h-100% w-full max-w-lg p-5 mt-20 mb-20">
        <div className='overflow-auto h-full'>
          <h1 className='text-4xl mb-2 mt-4 font-bold'>My <a class="underline decoration-pink-500">Doodies</a></h1>
          <div className='text-indigo-700'>
          <a class="p-1 text-xl"> {todos.filter(todo => !todo.complete).length}</a> more {todos.length === 1 ? 'task' : 'tasks'} today
          </div>
          <TodoList todos={todos} toggleTodo={toggleTodo}/>
          <button onClick={handleClearTodos} className='bg-red-300 p-4 rounded-lg  absolute top-8 right-5 rounded-full text-red-900 hover:bg-red-900 hover:text-red-100'><FaTrashAlt /></button>
        </div>  

        <div className='bg-indigo-100 w-full h-24 absolute bottom-0 left-0 rounded-b-lg'>
          <input ref={todoNameRef} className='border-2 p-3 rounded-lg absolute bottom-5 left-5 w-4/6 focus:text-indigo-600 focus:border-indigo-500' placeholder='enter your next task' type="text" />
          <button onClick={handleAddTodo} className='bg-green-300 p-3 rounded-full absolute bottom-5 right-5 text-2xl text-green-900 hover:bg-green-900 hover:text-green-100'><FaPlus /></button>
        </div>
      </div>
    </div>
  );
}

export default App;

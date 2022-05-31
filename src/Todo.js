import React from 'react'

function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div className='block'>
            <div className='mt-2'>
                <label className='inline-flex items-center mt1 p-4 pb-4 hover:shadow-xl hover:bg-indigo-200 rounded-lg'>
                    <input type="checkbox" id="checkbox" checked={todo.complete} onChange={handleTodoClick} className="w-7 h-7 text-indigo-600 rounded-full border-2 border-pink-500 focus:ring-0 peer"/>
                    <span for="checkbox" className='ml-2 text-xl text-indigo-800 font-bold peer-checked:text-indigo-100'>{todo.name}</span>
                </label>
            </div>
        </div>
    )
}

export default Todo
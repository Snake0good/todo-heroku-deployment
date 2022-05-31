import React from 'react'

function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div className='block'>
            <div className='mt-2'>
                <label className='inline-flex items-center mt-2'>
                    <input type="checkbox" id="checkbox" checked={todo.complete} onChange={handleTodoClick} className="w-6 h-6 rounded-full accent-indigo-600 hover:accent-indigo-700"/>
                    <span for="checkbox" className='ml-2 text-indigo-800 font-bold'>{todo.name}</span>
                </label>
            </div>
        </div>
    )
}

export default Todo
import React from 'react'

const TodosInfo = ({todos, setTodos}) => {

  const deleteAllTodoHandler = () => {
    if(window.confirm('Confirm?')){
      setTodos([])
    }
  }


  return (
    <div className="info">
    <span className="info__text">
      {todos.length
        ? `You have ${todos.length} pending tasks`
        : `You dont have any tasks`}
    </span>
    {!!todos.length 
    && <button
      className="info__deleteAllTodoButton"
      onClick={deleteAllTodoHandler}
    >
      Clear all
    </button>}
  </div>
  )
}

export default TodosInfo
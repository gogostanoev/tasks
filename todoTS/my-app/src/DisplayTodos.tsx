import React from 'react'

const todos = [
    {name: "Todo1", id: 0},
    {name: "Todo2", id: 1},
    {name: "Todo3", id: 2},
    {name: "Todo4", id: 3},
    {name: "Todo5", id: 4},
    {name: "Todo6", id: 5},
  ]

const DisplayTodos = () => {
  return (
    <div>
        {
            todos.map((todo, index) => {
                return <p>{todo.name}</p>
            })
        }
    </div>
  )
}

export default DisplayTodos
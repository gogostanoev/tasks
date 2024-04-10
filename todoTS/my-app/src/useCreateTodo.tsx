import React, { useState } from 'react'

type TodoType = {
    name: string;
    id: number;
}[];

export const useCreateTodo = () => {
    const [todos, setTodos] = useState<TodoType>([])
  return { todos, setTodos };
}

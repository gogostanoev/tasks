"use client";
import { useState } from "react";
import { Todo } from "./types/todo";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { TodoContainer, CounterContainer, CounterItem, HeadingContainer, TodoForm, TodoItemsContainer, DivContainer, NoTasks } from "./components/StyledComponents/StyledComponents";

export default function Home() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn NextJS", isDone: false },
    { id: "2", title: "Play a puzzle game", isDone: false },
    { id: "3", title: "Sleep for 8 hours", isDone: false },
  ]);
  const [completedTodosCount, setCompletedTodosCount] = useState(0);

  const handleChangeTodoTitle = (value: string) => {
    setTodoTitle(value);
  };

  const handleAddTodo = () => {
    const todo: Todo = {
      id: uuidv4(),
      title: todoTitle,
      isDone: false,
    };

    console.log(todo);

    setTodos([...todos, todo]);
    setTodoTitle("");
  };

  const handleToggleTodo = (todoId: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);

    const completedCount = updatedTodos.filter((todo) => todo.isDone).length;
    setCompletedTodosCount(completedCount);
  };

  const handleRemoveTodo = (todoId: string) => {
    if (todos.length === 0) return;
    const removedTodo = todos.find((todo) => todo.id === todoId);
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(filteredTodos);
    if (removedTodo && removedTodo.isDone) {
      setCompletedTodosCount((prevValue) => prevValue - 1);
    }
  };

  return (
    <main>
      <TodoContainer>
        <CounterContainer>
          <CounterItem>
            <h3>Total Todos: {todos.length}</h3>
          </CounterItem>
          <CounterItem>
            <h3>Completed Todos: {completedTodosCount}</h3>
          </CounterItem>
        </CounterContainer>

        <HeadingContainer>
          <h1>To-Do List</h1>
        </HeadingContainer>

        <TodoForm>
          <input
            type="text"
            placeholder="Add new todo"
            value={todoTitle}
            onChange={(e) => handleChangeTodoTitle(e.target.value)}
          />
          <button onClick={() => handleAddTodo()}>Add</button>
        </TodoForm>

        {todos.length ? (
          <TodoItemsContainer>
            {todos.map((todo) => (
              <DivContainer
                className={`div-container ${todo.isDone ? "completed" : ""}`}
                key={todo.id}
              >
                <Link href={`${todo.id}`}>
                  <div className="todo-text">
                    <h3>{todo.title}</h3>
                  </div>
                </Link>
                <div className="actions">
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => handleToggleTodo(todo.id)}
                  />
                  <button onClick={() => handleRemoveTodo(todo.id)}>X</button>
                </div>
              </DivContainer>
            ))}
          </TodoItemsContainer>
        ) : (
          <NoTasks>Currently there are no tasks!</NoTasks>
        )}
      </TodoContainer>
    </main>
  );
}

"use client";
import { useState } from "react";
import { Todo } from "./types/todo";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Link from "next/link";

const TodoContainer = styled.div`
  background: #4040af;
  margin-top: 5rem;
  padding: 2rem;
  border-radius: 5px;
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const CounterItem = styled.div`
  flex: 1;
  color: white;
`;
const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h1 {
    color: #fff;
    margin-right: 10px;
    font-size: 1.75rem;
  }
`;

const TodoForm = styled.div`
  input {
    outline: none;
    background-color: azure;
    border: 1px solid #3269e0;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 300px;
  }

  input::placeholder {
    color: #000000c2;
  }

  button {
    background: #8758ff;
    color: #fff;
    border: none;
    padding: 0.55rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #7e48db;
    }

    &:active {
      background-color: #bca8ee;
    }
  }
`;

const TodoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #8758ff;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;

  .todo-text {
    flex: 1;
    text-decoration: none;
    opacity: 1;
  }

  .actions {
    display: flex;
    align-items: center;
  }

  input {
    margin-left: auto;
    cursor: pointer;
  }

  button {
    margin-left: 1rem;
    width: 25px;
    height: 25px;
    font-size: 13px;
    border-radius: 50%;
    cursor: pointer;
    border-style: none;
  }

  button:hover {
    background-color: #bca8ee;
  }

  &.completed {
    .todo-text {
      text-decoration: line-through;
      text-decoration-thickness: 0.25rem;
      text-decoration-color: black;
      opacity: 0.7;
    }
  }
`;

const NoTasks = styled.div`
  text-align: center;
  font-size: 1.3rem;
  color: #ffffff;
`;

export default function Home() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuidv4(), title: "Learn NextJS", isDone: false },
    { id: uuidv4(), title: "Play a puzzle game", isDone: false },
    { id: uuidv4(), title: "Sleep for 8 hours", isDone: false },
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
                <Link href={`/todos/${todo.id}`}>
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

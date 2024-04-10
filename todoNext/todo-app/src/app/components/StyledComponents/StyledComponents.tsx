import { styled } from "styled-components";

export const TodoContainer = styled.div`
  background: #4040af;
  margin-top: 5rem;
  padding: 2rem;
  border-radius: 5px;
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;
export const CounterItem = styled.div`
  flex: 1;
  color: white;
`;
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h1 {
    color: #fff;
    margin-right: 10px;
    font-size: 1.75rem;
  }
`;

export const TodoForm = styled.div`
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

export const TodoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const DivContainer = styled.div`
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

export const NoTasks = styled.div`
  text-align: center;
  font-size: 1.3rem;
  color: #ffffff;
`;
import * as C from "./App.styled";
import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { TodoTask } from "./types/TodoTask";

function App() {
  const [todos, setTodos] = useState<TodoTask[]>([]);

  function addTodo(text: string, category: string) {
    const newTodos = [
      ...todos, 
      {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
      },
    ]

    setTodos(newTodos);
  }

  function removeTodo(id: number) {
    const newTodos = [...todos];

    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);

    setTodos(filteredTodos);
  }

  function completeTodo(id: number) {
    const newTodos = [...todos]

    newTodos.map((todo) => todo.id == id ? todo.isCompleted = !todo.isCompleted : todo);

    setTodos(newTodos);
  }

  return (
    <C.Container>
      <h1>Lista de Tarefas</h1>
      <C.TodoList>
        {todos.map((todo) => (
          <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          />
        ))}
      </C.TodoList>
      <TodoForm addTodo={addTodo} />
    </C.Container>
  )
}

export default App

import * as C from "./App.style";
import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { TodoTask } from "./types/TodoTask";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState<TodoTask[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

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
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <C.TodoList>
        {todos
        .filter((todo) => 
        filter === "All" 
        ? true 
        : filter === "Completed" 
        ? todo.isCompleted 
        : !todo.isCompleted
        )
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => 
        sort === "Asc" 
        ? a.text.localeCompare(b.text) 
        : b.text.localeCompare(a.text)
        )
        .map((todo) => (
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

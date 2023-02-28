import React, { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  {
    id: 1,
    title: "Go to the gym",
    completed: true,
  },
  {
    id: 2,
    title: "Complete Javascript course",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    title: "Pick up groceries",
    completed: false,
  },
  {
    id: 5,
    title: "Complete todo app on Frontend Mentor",
    completed: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: title.length + 1,
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const showAllTodos = () => {
    setTodos(
      todos.filter((todo) => {
        return todo;
      })
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-left-top bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        {/* TodoCreate */}
        <TodoCreate createTodo={createTodo} />
        {/* TodoList (TodoItem) TodoUpdate & TodoDelete */}
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
        {/* TodoComputed */}
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />
        {/* TodoFilter */}
        <TodoFilter todos={todos} showAllTodos={showAllTodos} />
      </main>

      <footer className="mt-10 text-center text-gray-400">
        Drag and Drop to reorder list
      </footer>
    </div>
  );
};

export default App;

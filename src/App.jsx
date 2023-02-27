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
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: title.length + 1,
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-left-top bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        {/* TodoCreate */}
        <TodoCreate createTodo={createTodo} />
        {/* TodoList (TodoItem) TodoUpdate & TodoDelete */}
        <TodoList todos={todos} />
        {/* TodoComputed */}
        <TodoComputed />
        {/* TodoFilter */}
        <TodoFilter />
      </main>

      <footer className="mt-10 text-center text-gray-400">
        Drag and Drop to reorder list
      </footer>
    </div>
  );
};

export default App;

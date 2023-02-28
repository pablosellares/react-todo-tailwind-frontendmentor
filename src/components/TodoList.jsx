import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <div className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-500 dark:bg-gray-800">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

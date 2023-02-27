import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, completeTodo }) => {
  return (
    <div className="mt-8 rounded-t-md bg-white ">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} completeTodo={completeTodo} />
      ))}
    </div>
  );
};

export default TodoList;

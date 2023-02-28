import React from "react";
import IconCheck from "./Icons/IconCheck";
import CrossIcon from "./Icons/IconCross";

const TodoItem = ({ todo, completeTodo, removeTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex items-center gap-4 border-b border-b-gray-400 px-6 py-4 dark:border-b-gray-600">
      <button
        className={`${
          completed
            ? "box-content flex h-2 w-2 rounded-full border-2 bg-gradient-to-br from-blue-400 to-purple-600 p-2 dark:border-gray-600"
            : "box-content inline-block h-2 w-2 rounded-full border-2 bg-white p-2 dark:border-gray-600 dark:bg-gray-800"
        }`}
        onClick={() => completeTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`grow ${
          completed
            ? "text-gray-300 line-through dark:text-gray-600"
            : "text-gray-600 dark:text-gray-300"
        }`}
      >
        {title}
      </p>
      <button
        className="flex h-8 w-8 items-center justify-center"
        onClick={() => removeTodo(id)}
      >
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;

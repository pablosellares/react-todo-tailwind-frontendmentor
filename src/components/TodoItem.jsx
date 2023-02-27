import React from "react";
import IconCheck from "./Icons/IconCheck";
import CrossIcon from "./Icons/IconCross";

const TodoItem = ({ todo, completeTodo, removeTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="border-b-gray400 flex items-center gap-4 border-b px-6 py-4">
      <button
        className={`${
          completed
            ? "box-content flex h-2 w-2 rounded-full border-2 bg-gradient-to-br from-blue-400 to-purple-600 p-2"
            : "box-content inline-block h-2 w-2 rounded-full border-2 bg-white p-2"
        }`}
        onClick={() => completeTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`grow ${
          completed ? "text-gray-300 line-through" : "text-gray-600"
        }`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;

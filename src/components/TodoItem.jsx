import React from "react";
import CrossIcon from "./CrossIcon";

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="border-b-gray400 flex items-center gap-4 border-b px-6 py-4">
      <button className="box-content inline-block h-2 w-2 rounded-full border-2 p-2"></button>
      <p className="grow text-gray-600">{title}</p>
      <button className="flex-none">
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;

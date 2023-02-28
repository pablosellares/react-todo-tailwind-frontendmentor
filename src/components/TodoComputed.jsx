import React from "react";

const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="border-b-gray400 flex items-center justify-between gap-4 rounded-b-md bg-white px-6 py-5 text-[12px] text-gray-500 transition-all duration-500 dark:bg-gray-800">
      <span>{computedItemsLeft} items left</span>
      <button onClick={clearCompleted}>Clear Completed</button>
    </section>
  );
};

export default TodoComputed;

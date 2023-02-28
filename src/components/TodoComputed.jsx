import React from "react";

const TodoComputed = ({ computedItemsLeft }) => {
  return (
    <section className="border-b-gray400 flex items-center justify-between gap-4 rounded-b-md bg-white px-6 py-4 text-[12px] text-gray-500">
      <span>{computedItemsLeft} items left</span>
      <button>Clear Completed</button>
    </section>
  );
};

export default TodoComputed;

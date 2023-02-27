import React from "react";

const TodoFilter = () => {
  return (
    <section className="container mx-auto mt-8">
      <div className=" flex items-center justify-center gap-4 rounded-md bg-white p-4 font-semibold">
        <button className="text-blue-500">All</button>
        <button className="text-gray-400 hover:text-blue-500">Active</button>
        <button className="text-gray-400 hover:text-blue-500">Completed</button>
      </div>
    </section>
  );
};

export default TodoFilter;

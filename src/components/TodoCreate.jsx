import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }

    createTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className=" flex h-full w-full items-center gap-4 rounded-md bg-white px-6 py-4"
    >
      <button className="box-content inline-block h-2 w-2 rounded-full border-2 p-2"></button>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-500 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;

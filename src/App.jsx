import React from "react";
import CrossIcon from "./components/CrossIcon";
import Luna from "./components/Luna";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-left-top bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[.6rem] text-white">
            TODO
          </h1>
          <button>
            <Luna className="fill-white" />
          </button>
        </div>

        <form className="mt-8 flex h-full w-full items-center gap-4 rounded-md bg-white px-6 py-4">
          <button className="box-content inline-block h-2 w-2 rounded-full border-2 p-2"></button>
          <input
            type="text"
            name=""
            id=""
            placeholder="Create a new todo..."
            className="w-full text-gray-500 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="my-6 rounded-md bg-white ">
          <article className="border-b-gray400 flex items-center gap-4 border-b px-6 py-4">
            <button className="box-content inline-block h-2 w-2 rounded-full border-2 p-2"></button>
            <p className="grow text-gray-600">
              Complete online Javascript course
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="border-b-gray400 flex items-center gap-4 border-b px-6 py-4">
            <button className="box-content inline-block h-2 w-2 rounded-full border-2 p-2"></button>
            <p className="grow">Complete online Javascript course</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="border-b-gray400 flex items-center justify-between gap-4 px-6 py-4 text-[12px] text-gray-500">
            <span>5 items left</span>
            <button>Clear Completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4">
        <div className=" flex items-center justify-center gap-4 rounded-md bg-white p-4 font-semibold">
          <button className="text-blue-500">All</button>
          <button className="text-gray-400 hover:text-blue-500">Active</button>
          <button className="text-gray-400 hover:text-blue-500">
            Completed
          </button>
        </div>
      </section>

      <p className="mt-10 text-center text-gray-400">
        Drag and Drop to reorder list
      </p>
    </div>
  );
};

export default App;

import React from "react";
import Luna from "./Icons/IconMoon";

const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-[.6rem] text-white">
          TODO
        </h1>
        <button>
          <Luna className="fill-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;

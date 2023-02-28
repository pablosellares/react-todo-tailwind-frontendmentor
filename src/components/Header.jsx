import React, { useEffect, useState } from "react";
import IconMoon from "./Icons/IconMoon";
import IconSun from "./Icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.getItem = ("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.getItem = ("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8 transition-all duration-500 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-[.6rem] text-white">
          TODO
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <IconSun className="fill-white" />
          ) : (
            <IconMoon className="fill-white" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const savedTheme = localStorage.getItem("theme");

  const currentTheme = theme || savedTheme ? savedTheme : "light";

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      title="Change theme"
      className="right-7 z-[998] flex items-center justify-center p-[0.85rem] bg-fuchsia-900 text-white border border-gray-200 dark:bg-neutral-900 dark:text-gray-200 rounded-full bottom-20 fixed"
      style={{
        boxShadow: "0px 0px 8px -1px #333",
      }}
    >
      {currentTheme === "dark" ? (
        <BsMoonStars
          size={20}
          className="cursorButton -rotate-[30deg] hover:rotate-0 hover:scale-125 transition-all ease-in-out duration-300"
        />
      ) : (
        <BsSun
          size={20}
          className="cursorButton hover:rotate-45 hover:scale-125 transition-all ease-in-out duration-300"
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;

"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="ml-16"
      onClick={(e) => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? <FaMoon /> : <BsSun />}
    </button>
  );
};

export default DarkModeButton;

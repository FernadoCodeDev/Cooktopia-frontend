import React, { useState, useEffect } from "react";
import DarkModeIcon from "../../assets/img/DarkMode.webp";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(storedMode ? storedMode === "true" : prefersDark);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <img
      src={DarkModeIcon}
      alt="DarkModeIcon"
      className="h-auto cursor-pointer w-28 invert-0 md:w-34"
      onClick={() => setDarkMode(!darkMode)}
    />
  );
};

export default DarkMode;
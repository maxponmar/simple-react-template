import styles from "./ThemeToggler.module.css";
import React, { useState, useEffect, useRef } from "react";

const lightTheme = {
  "--color-text": "#000000",
  "--color-background": "#eeeeee",
  "--color-sidebar": "#334756",
};
const darkTheme = {
  "--color-text": "#ffffff",
  "--color-background": "#011627",
  "--color-sidebar": "#c8c6c6",
};

const ThemeToggler = () => {
  const themeCheckboxRef = useRef();
  const [CurrentMode, setCurrentMode] = useState("light");
  const [IsChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      setCurrentMode("dark");
      setIsChecked(true);
    } else {
      themeCheckboxRef.current.checked = true;
    }
  }, []);

  useEffect(() => {
    const theme = CurrentMode === "light" ? lightTheme : darkTheme;
    Object.keys(theme).forEach((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  }, [CurrentMode]);

  const toggleTheme = () => {
    const newMode = themeCheckboxRef.current.checked ? "light" : "dark";
    setIsChecked(!IsChecked);
    setCurrentMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  return (
    <div className={styles.toggler}>
      <input
        className={styles.time}
        type="checkbox"
        id="time"
        onClick={toggleTheme}
        ref={themeCheckboxRef}
      />
      <label htmlFor="time">Night</label>
    </div>
  );
};

export default ThemeToggler;

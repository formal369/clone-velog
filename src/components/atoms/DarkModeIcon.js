import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./DarkModeIcon.module.scss";

const DarkModeIcon = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div
      className={`${styles["dark-mode-icon"]} ${isDarkMode ? styles.dark : ""}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default DarkModeIcon;

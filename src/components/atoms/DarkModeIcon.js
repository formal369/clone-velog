import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeIcon = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-icon" onClick={toggleDarkMode}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default DarkModeIcon;

import React, { useState } from "react";
import Logo from "../molecules/Logo";
import Menu from "../molecules/Menu";
import Navigation from "../molecules/Navigation";
import styles from "./Header.module.scss";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <header className={`${styles.header} ${isDarkMode ? styles.dark : ""}`}>
        <Logo />
        <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <Navigation />
    </div>
  );
};

export default Header;

import React from "react";
import Logo from "../molecules/Logo";
import Menu from "../molecules/Menu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;

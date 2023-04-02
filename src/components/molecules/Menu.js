import React from "react";
import Button from "../atoms/Button";
import DarkModeIcon from "../atoms/DarkModeIcon";
import SearchIcon from "../atoms/SearchIcon";
import styles from "./Menu.module.scss";

const Menu = ({
  isDarkMode,
  toggleDarkMode,
  searchValue,
  setSearchValue,
  onSearch,
}) => {
  const handleSearchIconClick = (e) => {
    e.preventDefault();
    window.location.href = "https://www.google.com/search?q=" + searchValue;
  };

  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <DarkModeIcon
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </li>
        <li>
          <SearchIcon onClick={handleSearchIconClick} />
        </li>
        <li>
          <Button
            label="Login"
            onClick={() => console.log("Login button clicked!")}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

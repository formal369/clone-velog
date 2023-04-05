import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import { FaClock } from "react-icons/fa";

const Navigation = () => {
  const [selectedOption, setSelectedOption] = useState("week");
  const [selectedTab, setSelectedTab] = useState("trending");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li
          className={`${styles.item} ${
            selectedTab === "trending" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("trending")}
        >
          트렌딩
        </li>
        <li
          className={`${styles.item} ${
            selectedTab === "new" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("new")}
        >
          <FaClock className={styles.icon} />
          최신
        </li>
        <li className={styles.item}>
          <select
            className={styles.select}
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="week">이번 주</option>
            <option value="month">이번 달</option>
            <option value="year">올해</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

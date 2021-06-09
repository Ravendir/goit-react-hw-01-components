import React from "react";
import styles from "./Statistics.module.css";

const Statistic = ({ id, label, percentage }) => {
  function randomColor() {
    return `rgb(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)})
      `;
  }
  return (
    <li
      className={styles.statisticList}
      key={id}
      style={{ backgroundColor: randomColor(), opacity: 0.5 }}
    >
      <span className={styles.statisticLabel}>{label}</span>
      <span className={styles.statisticPercentage}>{percentage}%</span>
    </li>
  );
};

export default Statistic;

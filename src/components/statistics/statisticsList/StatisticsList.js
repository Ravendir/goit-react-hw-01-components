import React from "react";
import Statistic from "../Statistics";
import styles from "../Statistics.module.css";

const StaticalList = ({ stats }) => (
  <section className={styles.statisticSection}>
    <h2 className={styles.statisticTitle}>UPLOAD STATS</h2>

    <ul className={styles.statisticContainer}>
      {stats.map(({ id, label, percentage }) => (
        <Statistic key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

export default StaticalList;

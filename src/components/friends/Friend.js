import React from "react";
import styles from "./Friends.module.css";
const Friends = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.friendsList} key={id}>
      <span className={isOnline ? styles.online : styles.offline}>
        {isOnline}
      </span>
      <img className={styles.friendsAvatar} src={avatar} />
      <p className={styles.friendsName}>{name}</p>
    </li>
  );
};

export default Friends;

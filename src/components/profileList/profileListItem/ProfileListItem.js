import React from "react";
import styles from "./ProfileListItem.module.css";
const Profile = ({
  url,
  title,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) => (
  <div className={styles.profileContainer}>
    <img className={styles.profileImg} src={url} alt={title}></img>
    <p className={styles.profileName}>{name}</p>
    <div className={styles.profileInfo}>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
    <ul className={styles.profileStatistic}>
      <li>
        <span>Followers</span>
        <span className={styles.statistic}>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span className={styles.statistic}>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span className={styles.statistic}>{likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;

import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ url, name, tag, location, stats }) => (
  <div className={styles.profileContainer}>
    <img className={styles.profileImg} src={url} alt={name}></img>
    <p className={styles.profileName}>{name}</p>
    <div className={styles.profileInfo}>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
    <ul className={styles.profileStatistic}>
      <li>
        <span>Followers</span>
        <span className={styles.statistic}>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span className={styles.statistic}>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span className={styles.statistic}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;

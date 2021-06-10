import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfileStyles.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;

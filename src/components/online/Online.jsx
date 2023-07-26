import styles from './online.module.css';

const Online = ({ user }) => {
  return (
    <li className={styles.rightBarFriend}>
      <div className={styles.rightBarProfileImgContainer}>
        <img src={user.profilePicture} alt="" className={styles.rightBarProfileImg} />
        <span className={styles.rightBarOnline}></span>
      </div>
      <span className={styles.rightBarUsername}>{user.username}</span>
    </li>
  )
}

export default Online;

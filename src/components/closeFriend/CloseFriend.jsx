import styles from './closeFriend.module.css';

const CloseFriend = ({ user }) => {
  return (
    <li className={styles.sidebarFriend}>
      <img src={user.profilePicture} alt="Friend Pix" className={styles.sidebarFriendImg} />
      <span className={styles.sidebarFriendName}>{user.username}</span>
    </li>
  )
}

export default CloseFriend;
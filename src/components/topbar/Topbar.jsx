import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from './topbar.module.css';
import profileImg from '../../assets/person/person-1.jpg';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <>
      <div className={styles.topbarContainer}>
        <div className={styles.topbarLeft}>
          <Link to="/" className={styles.logo}>
            <span>CaySocial</span>
          </Link>
        </div>
        <div className={styles.topbarCenter}>
          <SearchIcon className={styles.searchIcon} />
          <input
            placeholder="Search for friends, posts, or video"
            className={styles.searchInput}
          />
        </div>
        <div className={styles.topbarRight}>
          <div className={styles.topbarLinks}>
            <span className={styles.topbarLink}>Homepage</span>
            <span className={styles.topbarLink}>Timeline</span>
          </div>
          <div className={styles.topbarIcons}>
            <div className={styles.topbarIconItem}>
              <PersonIcon />
              <span className={styles.topbarIconBadge}>1</span>
            </div>
            <div className={styles.topbarIconItem}>
              <ChatIcon />
              <span className={styles.topbarIconBadge}>2</span>
            </div>
            <div className={styles.topbarIconItem}>
              <NotificationsIcon />
              <span className={styles.topbarIconBadge}>1</span>
            </div>
          </div>
          <img
            src={profileImg}
            alt="Profile Pix" 
            className={styles.topbarImg}
          />
        </div>
      </div>
    </>
  )
}

export default Topbar;
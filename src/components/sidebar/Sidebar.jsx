import { 
  RssFeed, Chat, PlayCircle, People, TurnedIn,
  ContactSupport, Work, InsertInvitation, School
} from '@mui/icons-material';
import styles from './sidebar.module.css';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <RssFeed className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Feed</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Chat className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Chat</span>
          </li>
          <li className={styles.sidebarListItem}>
            <PlayCircle className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Videos</span>
          </li>
          <li className={styles.sidebarListItem}>
            <People className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Groups</span>
          </li>
          <li className={styles.sidebarListItem}>
            <TurnedIn className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Bookmarks</span>
          </li>
          <li className={styles.sidebarListItem}>
            <ContactSupport className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Questions</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Work className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Jobs</span>
          </li>
          <li className={styles.sidebarListItem}>
            <InsertInvitation className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Events</span>
          </li>
          <li className={styles.sidebarListItem}>
            <School className={styles.sidebarIcon} />
            <span className={styles.sidebarListItemText}>Courses</span>
          </li>
        </ul>
        <button className={styles.sidebarButton}>Show More</button>
        <hr className={styles.sidebarHr} />
        <ul className={styles.sidebarFriendList}>
          {Users.map((user) => {
            return <CloseFriend key={user.id} user={user} />
          })}         
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
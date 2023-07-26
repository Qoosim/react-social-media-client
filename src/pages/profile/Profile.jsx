import Feed from '../../components/feed/Feed';
import RigthBar from '../../components/rightbar/RigthBar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import styles from './profile.module.css';
import coverImg from '../../assets/post/post-3.jpg';
import userImg from '../../assets/person/person-7.jpg';

const Profile = () => {
  return (
    <>
      <Topbar /> 
      <div className={styles.profile}>
        <Sidebar />
        <div className={styles.profileRight}>
          <div className={styles.profileRightTop}>
            <div className={styles.profileCover}>
              <img src={coverImg} alt="Cover Pix" className={styles.profileCoverImg} />
              <img src={userImg} alt="User Pix" className={styles.profileUserImg} />
            </div>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileInfoName}>Qoosim Abdul</h4>
              <span className={styles.profileInfoDesc}>This is Qoosim Abdul</span>
            </div>
          </div>
          <div className={styles.profileRightBottom}>
            <Feed />
            <RigthBar profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;

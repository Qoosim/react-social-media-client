import styles from './rightbar.module.css';
import giftImg from '../../assets/general/gift.png';
import advertImg from '../../assets/general/ad.jpg';
import activeImg from '../../assets/person/person-6.jpg';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const RigthBar = ({ profile }) => {

  const HomeRightbar = () => {
    return (
      <>
        <div className={styles.birthdayContainer}>
          <img src={giftImg} alt="Birthday Gift" className={styles.birthdayImg} />
          <span className={styles.birthdayText}>
            <b>Tony Blair</b> and <b>three other friends</b> have a birthday today
          </span>
        </div>
        <img src={advertImg} alt="Advert Pix" className={styles.rightBarAd} />
        <h4 className={styles.rightBarTitle}>Online Friends</h4>
        <ul className={styles.rightBarFriendList}>
          {Users.map((user) => {
            return <Online key={user.id} user={user}/>
          })} 
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={styles.rightbarTitle}>User Information</h4>
        <div className={styles.rightbarInfo}>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>City:</span>
            <span className={styles.rightbarInfoValue}>Nigeria</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>From:</span>
            <span className={styles.rightbarInfoValue}>Ibadan</span>
          </div>
          <div className={styles.rightbarInfoItem}>
            <span className={styles.rightbarInfoKey}>Relationship:</span>
            <span className={styles.rightbarInfoValue}>Single</span>
          </div>
        </div>
        <h4 className={styles.rightbarTitle}>User Friends</h4>
        <div className={styles.rightbarFollowings}>
          <div className={styles.rightbarFollowing}>
            <img src={activeImg} alt="Active User" className={styles.rightbarFollowingImg} />
            <span className={styles.rightbarFollowingName}>Qoosim Abdul</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img src={activeImg} alt="Active User" className={styles.rightbarFollowingImg} />
            <span className={styles.rightbarFollowingName}>Qoosim Abdul</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img src={activeImg} alt="Active User" className={styles.rightbarFollowingImg} />
            <span className={styles.rightbarFollowingName}>Qoosim Abdul</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img src={activeImg} alt="Active User" className={styles.rightbarFollowingImg} />
            <span className={styles.rightbarFollowingName}>Qoosim Abdul</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img src={activeImg} alt="Active User" className={styles.rightbarFollowingImg} />
            <span className={styles.rightbarFollowingName}>Qoosim Abdul</span>
          </div>
          <div className={styles.rightbarFollowing}>
            <img src={activeImg} alt="Active User" className={styles.rightbarFollowingImg} />
            <span className={styles.rightbarFollowingName}>Qoosim Abdul</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
     <div className={styles.rightBar}>
        <div className={styles.rightBarWrapper}>
          { profile ? <ProfileRightbar /> : <HomeRightbar /> } 
        </div>
     </div>
    </>
  )
}

export default RigthBar;

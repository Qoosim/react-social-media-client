import styles from './share.module.css';
import profileImg from '../../assets/person/person-1.jpg';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';

const Share = () => {
  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img src={profileImg} alt="Profile Pix" className={styles.shareProfileImg} />
          <input className={styles.shareInput} placeholder="What's in your mind?" />
        </div>
        <hr className={styles.shareHr} />
        <div className={styles.shareBottom}>
          <div className={styles.shareOptions}>
            <div className={styles.shareOption}>
              <PermMedia htmlColor='tomato' className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Photo or Video</span>
            </div>
            <div className={styles.shareOption}>
              <Label htmlColor='blue' className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Tag</span>
            </div>
            <div className={styles.shareOption}>
              <Room htmlColor='green' className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Location</span>
            </div>
            <div className={styles.shareOption}>
              <EmojiEmotions htmlColor='goldenrod' className={styles.shareIcon} />
              <span className={styles.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={styles.shareButton}>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share;
import { MoreVert } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import heartImg from '../../assets/general/heart.png';
import likeImg from '../../assets/general/like.png';
import noAvatar from '../../assets/person/noAvatar.png';
import { Users } from '../../dummyData';
import styles from './post.module.css';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLike] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  }

  return (
    <div className={styles.post}>
     <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img
              src={Users.filter((user) => user.id === post?.userId)[0].profilePicture}
              // src={user.profilePicture || noAvatar}
              alt="Profile Pix" 
              className={styles.postProfileImg}
            />
            <span className={styles.postUsername}>
              {Users.filter((user) => user.id === post?.userId)[0].username}
              {/* {user.username}  */}
            </span>
            <span className={styles.postDate}>{post.date}</span>
          </div>
          <div className={styles.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post?.desc}</span>
          <img src={post.photo} alt="Post Pix" className={styles.postImg} />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img
              src={likeImg}
              alt="Like Pix"
              className={styles.likeIcon}
              onClick={handleLike}
            />
            <img
              src={heartImg}
              alt="Heart Pix"
              className={styles.likeIcon}
              onClick={handleLike}
            />
            <span className={styles.postLikesCounter}>{like} likes</span>
          </div>
          <div className={styles.postBottomRight}>
            <div className={styles.postCommentsText}>{post.comment} comments</div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Post;

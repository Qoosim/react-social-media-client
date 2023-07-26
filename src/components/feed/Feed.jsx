import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import styles from './feed.module.css';
import { Posts } from '../../dummyData';

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('posts/timeline/64b7bac058992b76ae101423');
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, [])

  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share />
        {
          Posts.map((post) => {
            return <Post key={post.id} post={post} />
          })
        }
      </div>
    </div>
  )
}

export default Feed;

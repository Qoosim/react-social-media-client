import Feed from '../../components/feed/Feed';
import RigthBar from '../../components/rightbar/RigthBar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <Topbar />
      <div className={styles.homeContainer}>
        <Sidebar />
        <Feed />
        <RigthBar />
      </div>
    </>
  )
}

export default Home;

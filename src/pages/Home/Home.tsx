import { Heading } from "../../components/Heading/Heading";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <Sidebar />
        <main id="main">
          <Heading />
        </main>
      </div>
    </>
  );
};

export default Home;

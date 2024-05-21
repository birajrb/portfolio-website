import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from "./SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <a
          href="https://www.linkedin.com/in/biraj-rajbhandari-22102b224/"
          target="_blank"
          rel="nofollow"
          className={styles.linkedin}
        >
          <AiFillLinkedin size="24" />
        </a>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <a
          href="https://github.com/birajrb"
          target="_blank"
          rel="nofollow"
          className={styles.github}
        >
          <AiFillGithub size="24" />
        </a>
      </motion.span>
    </div>
  );
};

export default SocialLinks;

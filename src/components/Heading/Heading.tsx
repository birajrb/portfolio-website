import OutlinedButton from "../Buttons/OutlinedButton/OutlinedButton";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Heading.module.css";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <SocialLinks />
      <OutlinedButton onClick={() => window.open("/CV.pdf")}>
        My resume
      </OutlinedButton>
    </header>
  );
};

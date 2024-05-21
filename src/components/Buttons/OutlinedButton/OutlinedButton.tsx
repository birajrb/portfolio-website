import { MouseEventHandler } from "react";
import styles from "./OutlinedButton.module.css";
import { AiFillFilePdf } from "react-icons/ai";

const OutlinedButton = ({
  children,
  onClick,
}: {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className={styles.outlineButton}>
      {children}
    </button>
  );
};

export default OutlinedButton;

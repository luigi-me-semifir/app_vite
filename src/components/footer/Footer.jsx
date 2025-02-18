import styles from "./Footer.module.css";

const Footer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Footer;

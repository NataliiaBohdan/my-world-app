import styles from "./Footer.module.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {date} Copyright by MyWorld Inc.
      </p>
    </div>
  );
}

export default Footer;

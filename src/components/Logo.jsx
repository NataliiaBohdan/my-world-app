import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <p className={styles.logo}>
        My<span className={styles.span}>🌎World</span>
      </p>
    </Link>
  );
}

export default Logo;

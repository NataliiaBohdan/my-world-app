import { NavLink, useLocation } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo.jsx";
import BackButton from "./BackButton";

function PageNav() {
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {location.pathname !== "/blog" && (
          <li>
            <NavLink to="/blog" className={styles.link}>
              Our Blog
            </NavLink>
          </li>
        )}
        {location.pathname === "/blog" && (
          <li>
            <BackButton />
          </li>
        )}
        {location.pathname === "/" && (
          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PageNav;

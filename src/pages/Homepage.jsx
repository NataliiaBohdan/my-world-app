import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <div className={styles.wrapper}>
        <section>
          <h1>Travel the world and keep those memories with you.</h1>
          <h2>
            MyWorld application keeps all your travel experience around the
            world, making sure even a small town is tracking.
          </h2>
          <Link to="/login" className="cta">
            Start tracking now
          </Link>
          <img src="https://iili.io/2JUwcve.png" alt="banner image" />
        </section>
      </div>
    </main>
  );
}

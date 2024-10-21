import PageNav from "../components/PageNav";
import styles from "./Blog.module.css";
import Button from "../components/Button";

export default function Blog() {
  return (
    <main className={styles.blog}>
      <PageNav />
      <section className={styles.wrapper}>
        <h2>Travel blog for everyone.</h2>
        <ul className={styles.ul}>
          <li>
            <img src="https://iili.io/2daGEnS.jpg" />
            <h4>Exploring the Enchanting Streets of Lisbon</h4>
            <p>
              Lisbon, with its colorful tiles and historic trams, is a city that
              blends tradition with modernity. Discover hidden gems in the
              Alfama district and indulge in the local cuisine, from pastéis de
              nata to fresh seafood.
            </p>
            <Button type="primary">Read now</Button>
          </li>
          <li>
            <img src="https://iili.io/2daNDaS.jpg" />
            <h4>The Majestic Mountains of Patagonia: A Hikers Paradise</h4>
            <p>
              Patagonia offers breathtaking landscapes that draw adventurers
              from around the globe. Join us as we trek through Torres del Paine
              National Park, where jagged peaks and azure lakes create a
              stunning backdrop for outdoor enthusiasts.
            </p>
            <Button type="primary">Read now</Button>
          </li>
          <li>
            <img src="https://iili.io/2daLYwx.jpg" />
            <h4> Culinary Adventures in Bangkok: A Foodies Guide</h4>
            <p>
              Bangkok is a vibrant city known for its street food culture and
              bustling markets. From spicy tom yum soup to sweet mango sticky
              rice, this article will take you on a culinary journey through the
              flavors of Thailand.
            </p>
            <Button type="primary">Read now</Button>
          </li>
          <li>
            <img src="https://iili.io/2dcj312.jpg" />
            <h4>Discovering the Timeless Beauty of Kyoto</h4>
            <p>
              Kyoto, with its ancient temples and serene gardens, provides a
              glimpse into Japans rich cultural heritage. Explore the iconic
              Kinkaku-ji and stroll through the picturesque Arashiyama Bamboo
              Grove, where tranquility meets beauty.
            </p>
            <Button type="primary">Read now</Button>
          </li>
        </ul>
      </section>
    </main>
  );
}

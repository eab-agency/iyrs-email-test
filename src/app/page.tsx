import Link from "next/link";

import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="https://www.troy.edu/">
          <h1 className={styles.title}>Troy University Paid Search</h1>
        </Link>
        <div className={styles.cardRow}>
          <Link className={styles.card} href="https://www.troy.edu/">
            <h3 className={styles.cardTitle}>About Troy</h3>
            <div className={styles.cardText}>
              From award-winning academic opportunities to exciting Division I
              athletics events, Troy University provides students around the
              globe with top-notch learning opportunities—in class and online.
              For 19 consecutive years, TROY has been named to The Princeton
              Review’s “Best in the Southeast” list. It’s your time to
              lead.&#34;
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

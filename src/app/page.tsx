import Link from "next/link";

import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="https://www.roanoke.edu/">
          <h1 className={styles.title}>Roanoke College Paid Search</h1>
        </Link>
        <div className={styles.cardRow}>
          <Link className={styles.card} href="https://www.roanoke.edu/">
            <h3 className={styles.cardTitle}>About Roanoke</h3>
            <div className={styles.cardText}>
              Roanoke College is an independent, co-educational liberal arts
              college. Founded in 1842, it is the second-oldest Lutheran-related
              college in America. Discover why US News and World Report, The
              Princeton Review and Forbes Magazine consistently rank Roanoke as
              one of the top colleges and liberal arts programs in the nation.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

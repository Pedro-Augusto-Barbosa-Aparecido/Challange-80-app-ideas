import styles from '../styles/Home.module.css'
import ContentCards from "./components/ContentCards";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1 className={styles.title}>Challenges Beginners List</h1>
        <ContentCards />
      </main>

  );
}

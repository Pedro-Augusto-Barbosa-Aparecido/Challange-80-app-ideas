import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ContentCards from "./components/ContentCards";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1>Challenges Beginners List</h1>
        <ContentCards />
      </main>

  );
}

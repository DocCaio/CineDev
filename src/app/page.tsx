import Navbar from "./components/Navbar";
import Title from "./components/Title";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <header className={styles.header}>
       <Navbar/>
    </header>
    <main className={styles.main}>
      <div className={styles.description}>
        <Title/>
      </div>
    </main>
    </>
  );
}

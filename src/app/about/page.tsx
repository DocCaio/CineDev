import Image from 'next/image';
import styles from './streaming.module.css';
import old from './assets/old.png';
import race from './assets/race.png';
import gold from './assets/gold.png';
import dark from './assets/dark.png';

export default function About() {
  return (
    <>
    <div>
      <h1 className={styles.title}>Now Streaming</h1>

<div  className={styles.streaming}>
      <legend className={styles.type}>Dark</legend> 
      <Image
                 className={styles.img}        
                 width={100}
                 height={100}
                 alt='Poltrona Escolhida' 
                 src={dark}
                 />

<legend className={styles.type}>Dark</legend> 
      <Image
                 className={styles.img}        
                 width={100}
                 height={100}
                 alt='Poltrona Escolhida' 
                 src={old}
                 />


<legend className={styles.type}>Gold</legend> 
      <Image
                 className={styles.img}        
                 width={100}
                 height={100}
                 alt='Poltrona Escolhida' 
                 src={gold}
                 />


<legend className={styles.type}>Dark</legend> 
      <Image
                 className={styles.img}        
                 width={100}
                 height={100}
                 alt='Poltrona Escolhida' 
                 src={race}
                 />
    </div>            
    </div>          
    </>
  );
}

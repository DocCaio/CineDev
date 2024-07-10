import styles from './ticket.module.css'; // Make sure the file path is correct
import Link from 'next/link';
import Image from 'next/image';
import Poltrona from '../../assets/PoltronaEscolhida.png';

export default function Ticket() {
  return (
    <div className={styles.container}>    
      <Image src={Poltrona} alt="Poltrona Escolhida" /> {/* Use next/image for optimized loading */}      
    </div>
  );
}

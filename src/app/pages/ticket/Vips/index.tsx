import styles from './vips.module.css'; // Make sure the file path is correct
import Link from 'next/link';
import Image from 'next/image';
import Poltrona from '../../../assets/PoltronaLivre.png';
import Preferencial from '../../../assets/PoltronaLivrePreferencial.png';

export default function Ticket() {
  return (
    <>
      <div className={styles.ticketContainer}>
        {[...Array(12)].map((_, index) => (
          <div key={index} className={styles.imageWrapper}>            
            <Image src={Poltrona} alt={`Poltrona ${index + 1}`} width={100} height={100} />

          </div>
        ))}
        {[...Array(2)].map((_, index) => (
          <div key={index} className={styles.imageWrapper}>            
            <Image src={Preferencial} alt={`Preferencial ${index + 1}`} width={100} height={100} />

          </div>
        ))}
      </div>
    </>
  );
}

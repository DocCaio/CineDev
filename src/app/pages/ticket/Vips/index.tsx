"use client";
import { useState } from 'react';
import styles from './vips.module.css'; 
import Image from 'next/image';
import PoltronaLivre from '../../../assets/PoltronaLivre.png';
import PoltronaOcupada from '../../../assets/PoltronaEscolhida.png';
import PreferencialLivre from '../../../assets/PoltronaLivrePreferencial.png';
import PreferencialOcupada from '../../../assets/PoltronaEscolhidaPreferencial.png';


export default function Ticket() {
  const [selectedNormalImages, setSelectedNormalImages] = useState<boolean[]>(Array(10).fill(false));
  const [selectedPreferentialImages, setSelectedPreferentialImages] = useState<boolean[]>(Array(2).fill(false));

  const handleNormalClick = (index: number) => {
    setSelectedNormalImages((prev) => {
      const newSelectedImages = [...prev];
      newSelectedImages[index] = !newSelectedImages[index];
      return newSelectedImages;
    });
  };

  const handlePreferentialClick = (index: number) => {
    setSelectedPreferentialImages((prev) => {
      const newSelectedImages = [...prev];
      newSelectedImages[index] = !newSelectedImages[index];
      return newSelectedImages;
    });
  };

  return (
    <>           
      <section>      
        <div className={styles.chars}>
          <div className={styles.ticketContainer}>
            {[...Array(12)].map((_, index) => (
              <div key={index} className={styles.imageWrapper} onClick={() => handleNormalClick(index)}>                      
                <Image
                  src={selectedNormalImages[index] ? PoltronaOcupada : PoltronaLivre}
                  alt={`Poltrona ${index + 1}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
            {[...Array(2)].map((_, index) => (
              <div key={index} className={styles.imageWrapper} onClick={() => handlePreferentialClick(index)}>              
                <Image
                  src={selectedPreferentialImages[index] ? PreferencialOcupada : PreferencialLivre}
                  alt={`PoltronaPreferencial ${index + 1}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>        
        </div>
      </section>
    </>
  );
}

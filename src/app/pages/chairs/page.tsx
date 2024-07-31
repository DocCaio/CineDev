"use client";
import { useState } from 'react';
import styles from './ticket.module.css';
import Image from 'next/image';
import PoltronaLivre from '../../assets/PoltronaLivre.png';
import PoltronaOcupada from '../../assets/PoltronaEscolhida.png';
import PreferencialLivre from '../../assets/PoltronaLivrePreferencial.png';
import PreferencialOcupada from '../../assets/PoltronaEscolhidaPreferencial.png';
import More from './More';
import Vips from './Vips';
import Legend from './Legend';
import Screen from './Screen';
import Link from 'next/link';

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
        <div>
          <Legend />
        </div>
        <Vips />
        <div className={styles.chars}>
          <div className={styles.ticketContainer}>
            {[...Array(10)].map((_, index) => (
              <div key={index} className={styles.imageWrapper} onClick={() => handleNormalClick(index)}>
                <Image
                  className={styles.sits}
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
                  className={styles.chairWheels}
                  src={selectedPreferentialImages[index] ? PreferencialOcupada : PreferencialLivre}
                  alt={`PoltronaPreferencial ${index + 1}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          <More />
        </div>
        <Screen />

        <div className={styles.link}>
          <Link
            href="../../pages/shop"
            className={styles.next}
          >
            Next
          </Link>
        </div>
      </section>
    </>
  );
}

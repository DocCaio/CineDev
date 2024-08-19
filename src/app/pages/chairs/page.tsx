
"use client"
import { useState } from 'react';
import styles from './ticket.module.css';
import Image from 'next/image';
import PoltronaLivre from '../../assets/PoltronaLivre.png';
import PoltronaOcupada from '../../assets/PoltronaEscolhida.png';
import PreferencialLivre from '../../assets/PoltronaLivrePreferencial.png';
import PreferencialOcupada from '../../assets/PoltronaEscolhidaPreferencial.png';
import Legend from './Legend';
import Screen from './Screen';
import Check from '../../assets/check.png';
import Modal from '@/components/modal/modal';

export default function Ticket() {
  const totalNormalSeats = 30; // Quantidade total de assentos normais
  const totalPreferentialSeats = 6; // Quantidade total de assentos preferenciais

  const [selectedNormalImages, setSelectedNormalImages] = useState<boolean[]>(Array(totalNormalSeats).fill(false));
  const [selectedPreferentialImages, setSelectedPreferentialImages] = useState<boolean[]>(Array(totalPreferentialSeats).fill(false));

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

  // Verifica se pelo menos uma imagem está selecionada
  const isButtonEnabled = selectedNormalImages.some(Boolean) || selectedPreferentialImages.some(Boolean);

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <section>
        <div>
          <Legend />
        </div>
        <div className={styles.chars}>
          <div className={styles.vip}>
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
              <div key={index + totalNormalSeats} className={styles.imageWrapper} onClick={() => handlePreferentialClick(index)}>
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
        <div className={styles.chars}>
          <div className={styles.ticketContainer}>
            {[...Array(10)].map((_, index) => (
              <div key={index + 12} className={styles.imageWrapper} onClick={() => handleNormalClick(index + 12)}>
                <Image
                  className={styles.sits}
                  src={selectedNormalImages[index + 12] ? PoltronaOcupada : PoltronaLivre}
                  alt={`Poltrona ${index + 13}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
            {[...Array(2)].map((_, index) => (
              <div key={index + totalNormalSeats + 2} className={styles.imageWrapper} onClick={() => handlePreferentialClick(index + 2)}>
                <Image
                  className={styles.chairWheels}
                  src={selectedPreferentialImages[index + 2] ? PreferencialOcupada : PreferencialLivre}
                  alt={`PoltronaPreferencial ${index + 3}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          <div className={styles.ticketContainer}>
            {[...Array(10)].map((_, index) => (
              <div key={index + 22} className={styles.imageWrapper} onClick={() => handleNormalClick(index + 22)}>
                <Image
                  className={styles.sits}
                  src={selectedNormalImages[index + 22] ? PoltronaOcupada : PoltronaLivre}
                  alt={`Poltrona ${index + 23}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
            {[...Array(2)].map((_, index) => (
              <div key={index + totalNormalSeats + 4} className={styles.imageWrapper} onClick={() => handlePreferentialClick(index + 4)}>
                <Image
                  className={styles.chairWheels}
                  src={selectedPreferentialImages[index + 4] ? PreferencialOcupada : PreferencialLivre}
                  alt={`PoltronaPreferencial ${index + 5}`}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
        <Screen />

        <div className={styles.link}>
          <button onClick={() => setOpenModal(true)}
            className={`${styles.next} ${isButtonEnabled ? '' : styles.disabled}`}>Finish
          </button>
        </div>
        <Modal  isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} >
          
        <Image alt='check icon' src={Check}/>
         


        </Modal>
      </section>
    </>
  );
}

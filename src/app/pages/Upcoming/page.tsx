// App.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Card from './Posters/poster';
import { Card as CardType } from '@/data/model/Poster';
import cardData from '@/data/utils/Upcoming.json'; // Supondo que cards.json esteja na mesma pasta
import styles from './Upcoming.module.css';

const App: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    // Carregando dados dos cards
    setCards(cardData);
  }, []);

  return (
    <div className={styles.app}>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default App;

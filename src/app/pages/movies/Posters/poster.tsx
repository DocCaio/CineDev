// Card.tsx
import React from 'react';
import { Card as CardType } from '../../../../data/model/Poster';
import styles from '../streaming.module.css';
import { getImageUrl } from "../../../../data/utils/path";

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <img src={card.imageUrl} alt={card.title} />
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  );
};

export default Card;

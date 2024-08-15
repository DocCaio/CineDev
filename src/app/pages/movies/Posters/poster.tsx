// Card.tsx
import { Card as CardType } from '../../../../data/model/Poster';
import styles from '../streaming.module.css';
import Link from 'next/link';

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <Link href='/pages/shop'>
      <img src={card.imageUrl} alt={card.title} />
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      </Link>
    </div>
  );
};

export default Card;

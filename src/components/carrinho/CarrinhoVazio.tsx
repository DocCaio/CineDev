import { IconShoppingCartOff } from '@tabler/icons-react';
import Link from 'next/link';
import styles from './styles/emptyKart.module.css';

export default function CarrinhoVazio() {
    return (
        <div className={styles.card}>
            <IconShoppingCartOff size={150} stroke={0.5} />
            <div>
                <h2 className={styles.title}>Your cart is empty</h2>
                <p>Add products by clicking the button below</p>
            </div>
            <Link href="/pages/shop" className={styles.link}>
               View products
            </Link>
        </div>
    )
}

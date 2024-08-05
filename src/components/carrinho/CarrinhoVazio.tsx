import { IconShoppingCartOff } from '@tabler/icons-react';
import Link from 'next/link';
import styles from './styles/emptyKart.module.css';

export default function CarrinhoVazio() {
    return (
        <div className={styles.card}>
            <IconShoppingCartOff size={150} stroke={0.5} />
            <div>
                <h2 className={styles.title}>Seu carrinho está vazio</h2>
                <p>Adicione produtos clicando no botão abaixo</p>
            </div>
            <Link href="/pages/shop" className={styles.link}>
                Ver produtos
            </Link>
        </div>
    )
}

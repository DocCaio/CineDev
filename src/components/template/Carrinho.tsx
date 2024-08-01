import useCarrinho from '@/data/hooks/useCarrinho';
import { IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';
import styles from './styles/carrinho.module.css';

export default function Carrinho() {
    const { qtdeDeItens } = useCarrinho()
    return (
        <Link href="/carrinho">
            <div className={styles.container}>
                <IconShoppingCart size={32} stroke={1} />
                <div
                    className={styles.kart}                      
                    
                >
                    {qtdeDeItens}
                </div>
            </div>
        </Link>
    )
}

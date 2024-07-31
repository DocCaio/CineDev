'use client'
import CartaoProduto from '@/components/produto/CardProduct';
import Pagina from '@/components/template/Pagina';
import produtos from '@/data/constants/produtos';
import styles from './page.module.css';

export default function Home() {
    return (
        <Pagina>
            <div className={styles.pagina}>
                {produtos.map((produto) => (
                    <CartaoProduto key={produto.id} produto={produto} />
                ))}
            </div>
        </Pagina>
    )
}

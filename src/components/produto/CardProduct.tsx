import useCarrinho from '@/data/hooks/useCarrinho';
import Produto from '@/data/model/Produto';
import Image from 'next/image';
import styles from './CardProduto.module.css';

export interface CartaoProdutoProps {
    produto: Produto
}

export default function CartaoProduto(props: CartaoProdutoProps) {
    const { adicionar } = useCarrinho()
    const { nome, descricao, preco, imagem } = props.produto
    return (
        <div className={styles.containerCards}>
            <div className={styles.cards}>
                
                <Image src={imagem} alt={nome} fill className={styles.ticket} />
            </div>
            <div className={styles.description}>
                <h2 className={styles.test}>{nome}</h2>
                <p className={styles.descricao}>{descricao}</p>
                <div className={styles.container}>
                    <span className={styles.span}>R$ {preco?.toFixed(2)}</span>
                    <button
                        onClick={() => adicionar(props.produto)}
                        className={styles.btn}
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
}

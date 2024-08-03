import ItemCarrinho from '@/data/model/ItemCarrinho';
import { IconMinus, IconPlus, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import styles from './styles/areaItem.module.css';

export interface AreaItemCarrinhoProps {
    item: ItemCarrinho
    adicionar?: (item: ItemCarrinho) => void
    remover?: (item: ItemCarrinho) => void
}

export default function AreaItemCarrinho(props: AreaItemCarrinhoProps) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image
                    src={props.item.produto.imagem}
                    alt={props.item.produto.nome}
                    fill
                    className={styles.img}
                />
            </div>
            <div className={styles.description}>
                <span className={styles.descriptionName}>{props.item.produto.nome}</span>
                <span className={styles.descriptionProduct}>{props.item.produto.descricao}</span>
                <div className={styles.contain}>
                    <span>R$ {props.item.produto.preco.toFixed(2)}</span>
                    <IconX size={20} />
                    <span>{props.item.quantidade}</span>
                    <span>=</span>
                    <span className={styles.containQnt}>
                        R$ {(props.item.produto.preco * props.item.quantidade).toFixed(2)}
                    </span>
                </div>
            </div>
            <div className={styles.remove}>
                <button onClick={() => props.remover?.(props.item)}>
                    <IconMinus />
                </button>
                <span className={styles.Qnt}>{props.item.quantidade}</span>
                <button onClick={() => props.adicionar?.(props.item)}>
                    <IconPlus />
                </button>
            </div>
        </div>
    )
}

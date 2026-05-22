'use client';
import AreaItemCarrinho from '@/components/carrinho/AreaItemCarrinho';
import CarrinhoVazio from '@/components/carrinho/CarrinhoVazio';
import TotalCarrinho from '@/components/carrinho/TotalCarrinho';
import Pagina from '@/components/template/Pagina';
import useCarrinho from '@/data/hooks/useCarrinho';
import styles from './carrinho.module.css';

export default function PaginaCarrinho() {
    const { itens, adicionar, remover } = useCarrinho()
    return (
        <Pagina className={styles.page}>
            {itens.length === 0 ? (
                <CarrinhoVazio />
            ) : (
                <>
                    <div className={styles.card}>
                        {itens.map((item) => (
                            <AreaItemCarrinho
                                key={item.produto.id}
                                item={item}
                                adicionar={(item) => adicionar(item.produto)}
                                remover={(item) => remover(item.produto)}
                            />
                        ))}
                    </div>
                    <TotalCarrinho itens={itens} />
                </>
            )}
        </Pagina>
    )
}

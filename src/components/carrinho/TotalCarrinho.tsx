import ItemCarrinho from '@/data/model/ItemCarrinho';
import styles from './styles/total.module.css';
import Modal from '../modal/modal';
import { useState } from 'react';

export interface TotalCarrinhoProps {
    itens: ItemCarrinho[]
}

export default function TotalCarrinho(props: TotalCarrinhoProps) {
    const [openModal , setOpenModal] = useState(false);
    const total = props.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)
    return (
        
        <div className={styles.container}>             
            <div className={styles.containerDiv}>                
                <span className={styles.span}>Total</span>
                <span className={styles.price}>R$ {total.toFixed(2)}</span>
            </div>
            <button onClick={() => setOpenModal(true)} 
            className={styles.btn}>Finalizar</button>
                 <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} >
         Compra concluída
         
       </Modal>
       </div>              
                 
       
    )
}

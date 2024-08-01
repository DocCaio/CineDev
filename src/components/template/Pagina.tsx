import Carrinho from './Carrinho'
import './styles/page.module.css';
import styles from './styles/page.module.css';



export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={styles.div}>
           
           <Carrinho/>
            <main
                className={`
                    main
                    flex-1 w-[1200px] mx-auto
                    ${props.className ?? ''} py-10
                `}
            >
            
                {props.children}
            </main>
        </div>
    )
}

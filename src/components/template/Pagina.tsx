import Cabecalho from './navBar';
import './styles/page.css';
import Buttons from "@/components/Buttons/buttons";
import Star from "../Star";
import styles from './styles/page.module.css'

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Cabecalho />
            <main
                className={`
                    main
                    flex-1 w-[1200px] mx-auto
                    ${props.className ?? ''} py-10
                `}
            >

<section className={styles.texts}>
        <h1 className={styles.title}>Star Wars</h1>
        <p className={styles.subtitle}>
          Star Wars is an American space opera franchise created
          by filmmaker George Lucas, which features a series
          of nine science fantasy films and two spin-offs.
        </p>
        <Star/>
        <Buttons/>

      </section>
                {props.children}
            </main>
        </div>
    )
}

import Buttons from '../Buttons';
import Star from '../Star';
import style from './title.module.css';


export interface AdInterface {   
    src:string;
}

const  Title = () => {

    return (
       
        <>
        <section className={style.texts}>
            <h1 className={style.title}>Star Wars</h1>
            <p className={style.subtitle}>
            Star Wars is an American space opera franchise created
            by filmmaker George Lucas, which features a series 
            of nine science fantasy films and two spin-offs.
            </p>
            <Star/>
            <Buttons/>

        </section>

        </>
        
    )

}

    
export default Title;
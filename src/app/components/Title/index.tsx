import Buttons from '../Buttons';
import style from './title.module.css';


export interface AdInterface {   
    src:string;
}

const  Title = () => {

    return (
       
        <>
        <section>
            <h1 className={style.title}>Everything everywhere all at once</h1>
            <p className={style.subtitle}>
                It is about the events that develop when Evelyn, who has an ordinary life with her 
                family and job, suddenly becomes aware of her selves in all multiverses
                and discovers that she is the only power that can save the universe.
            </p>
            <Buttons/>

        </section>

        </>
        
    )

}

    
export default Title;
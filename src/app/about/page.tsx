import styles from "./streaming.module.css";
import posters from '../../data/constants/produtos';
import  Poster  from './poster/poster';



export const Posters = () => {  
   return (

 <section id='posters' className={styles.container}>
   <h2 className={styles.title}>Main Projects</h2>   
   <div className={styles.poster}>
     {posters.map((poster, id) => {
      return (
          <Poster key={id} posters={poster}/>

      )
     })}
   </div>
 </section>

    )
}
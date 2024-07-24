
import styles from "./streaming.module.css";
import projects from '../../../data/utils/posters.json';
import { Posters } from './Posters/poster';



export const Projects = () => {  
   return (

 <section id='projects' className={styles.container}>
   <h2 className={styles.title}>Main Projects</h2>   
   <div className={styles.projects}>
     {projects.map((project, id) => {
      return (
          <Posters key={id} project={project}/>

      )
     })}
   </div>
 </section>

    )
}
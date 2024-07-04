import styles from './chairs.module.css';
import { getImageUrl } from "../../util/path";

export interface AdInterface {   
    src:string;    
}

export interface Project {
    imageSrc: string;
    title: string;
}

interface ChairsProps {
    project: Project;
}




const Chairs = ({ project: { imageSrc, title } }: ChairsProps) => {

    return (
       
        <section className={styles.links}>

   <div className="1row ">
        <div className="col-xs-12 ">
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />  
            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />  
            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />  
            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />    
            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />  
            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />  
            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />  
            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}             
             />  
            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />  
            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />  
            </div>
            <div className="col-md-1 ">
            <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}
             className={styles.image}
             
             />  
            </div>
        </div>
    </div>
    <br/>      
      
       
       
         
          </section> 

        
    )

}

    
export default Chairs;
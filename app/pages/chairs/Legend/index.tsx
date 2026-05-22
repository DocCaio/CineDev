import styles from './legend.module.css';
import Image from 'next/image';
import Poltrona from '../../../assets/PoltronaLivre.png';
import Preferencial from '../../../assets/PoltronaLivrePreferencial.png';
import PoltronaOcupada from '../../../assets/PoltronaOcupada.png';
import PoltronaEscolhida from '../../../assets/PoltronaEscolhida.png';

export default function Legend() {
  return (
    <>
      <div className={styles.legendContainer}>

       <div> 
        <Image
                className={styles.img}  
                width={100}
                height={100}
                alt='Poltrona' 
                src={Poltrona}
                />
                <legend className={styles.type}>Disponivel</legend> 
        </div> 

        <div>     
        <Image  
               className={styles.img} 
                width={100}
                height={100}
                 alt='Poltrona Ocupada' 
                 src={PoltronaOcupada}
                 />
                 <legend className={styles.type}>Ocupada</legend>
          </div>   

               

                 <div>   
        <Image 
                 className={styles.img}        
                 width={100}
                 height={100}
                 alt='Poltrona Escolhida' 
                 src={PoltronaEscolhida}
                 />
                 <legend className={styles.type}>Escolhida</legend> 
                 </div>  

                  <div>   
        <Image 
              className={styles.img} 
               width={100}
               height={100} 
               alt='Preferencial' 
               src={Preferencial}
               />
               <legend className={styles.type}>Preferencial</legend>  
               </div>   
     
      </div>
    </>
  );
}

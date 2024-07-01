import style from './buttons.module.css';
//import arrow from '../../assets/arrow-right-short.svg';
//import vector from '../../assets/Vector.png';


export interface AdInterface {   
    src:string;
}

const  Buttons = () => {

    return (
       
        <>

       
          <a className={style.link}>
            Trailer 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
           </svg>           
          </a>

        
          <a  className={style.link}>
            Get Ticket 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
           </svg>
          </a>

        </>
        
    )

}

    
export default Buttons;
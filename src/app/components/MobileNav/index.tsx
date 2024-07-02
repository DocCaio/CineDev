import { useState } from 'react';
import style from './navbar.module.css';


export interface AdInterface {   
    src:string;    
}

const MobileNav =({isOpen, toggleMenu}) => {  

    return (
   <>   
   <div className={`mobile-menu ${isOpen ? "active": ""}`}
         onClick={toggleMenu}
   >

    
            <div className={style.mobile}>
               <span className={style.cine}>Cine</span> 
               <span className={style.dev}>Dev</span> 
            </div>
            <div>
                <ul className={style.list}>
                    <li className={style.link}>
                        <a className={style.links} href="#">Home</a>
                    </li>
                    <li  className={style.link}>
                        <a  className={style.links} href="#">Streaming</a>
                    </li>
                    <li  className={style.link}>
                        <a  className={style.links} href="#">Upcoming</a>
                    </li>
                </ul>                
                
            </div>

   </div>
   </>
    )
}

export default MobileNav;
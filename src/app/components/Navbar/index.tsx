"use client";
import { useState } from 'react'
import style from './navbar.module.css';
import MobileNav from '../MobileNav';

export interface AdInterface {   
    src:string;
    useState:boolean;
   
}


const  Navbar = () => {

    const [openMenu , setOpenMenu] = useState(false);
     
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    
   
    return (
       
        <>        
          <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
        <section className={style.bar}>
        <div className={style.barContent}>
            <div>
               <span className={style.cine}>Cine</span> 
               <span className={style.dev}>Dev</span> 
            </div>
            <div>
                <ul className={style.list}>
                    <li className={style.link}>
                        <a className={style.links} href="../../pages/Chairs">Home</a>
                    </li>
                    <li  className={style.link}>
                        <a  className={style.links} href="#">Streaming</a>
                    </li>
                    <li  className={style.link}>
                        <a  className={style.links} href="#">Upcoming</a>
                    </li>
                </ul>                
                
            </div>

            <button className={style.menuBtn} onClick={toggleMenu}>
            <span 
              className={"material-symbols-outlined"}
              style={{fontSize: "1.8rem"}}
            >               
                {openMenu ? "x" : "|||"}
                
            </span>
            </button> 

            </div>

            </section>

        </>
        
    )

}
 

    
export default Navbar;
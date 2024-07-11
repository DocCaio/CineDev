"use client";
import { useState } from 'react'
import style from './navbar.module.css';
import MobileNav from '../MobileNav';
import Link from 'next/link';

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
                        <Link href="/" className={style.links}>Home</Link>
                    </li>
                    <li  className={style.link}>
                        <Link href="/about"  className={style.links}>Streaming</Link>
                    </li>
                    <li  className={style.link}>
                        <Link href="/"  className={style.links}>Upcoming</Link>
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
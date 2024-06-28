import style from './navbar.module.css';

const  Navbar = () => {

    return (
       
        <>
        <section className={style.bar}>

            <div>
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

            </section>

        </>
        
    )

}
 

    
export default Navbar;
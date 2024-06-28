import style from './navbar.module.css';

const  Navbar = () => {

    return (
        <header>
        <nav>
            <div>
               <span className={style.cine}>Cine</span> 
               <span className={style.dev}>Dev</span> 
            </div>

        </nav>
        </header>
    )

}
 

    
export default Navbar;
import Image from "next/image";
import screen from '../../../assets/Tela.png';
import style  from "./sreen.module.css";


export default function Screen() {
    return (
<>
<div className={style.container}>
    <span className={style.span}>Screen</span>
<Image
className={style.screen}
alt='tela'
src={screen}

/>

</div>
  


          
    </>
    );

}

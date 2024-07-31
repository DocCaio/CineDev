//import Link from "next/link";
import style from './page.module.css';
import Buttons from "@/./components/Buttons/buttons";
import Star from "../../components/Star";

export default function Home() {
  return (
    <>
      <section className={style.texts}>
        <h1 className={style.title}>Star Wars</h1>
        <p className={style.subtitle}>
          Star Wars is an American space opera franchise created
          by filmmaker George Lucas, which features a series
          of nine science fantasy films and two spin-offs.
        </p>
        <Star />
        <Buttons />

      </section>
    </>
  );
}

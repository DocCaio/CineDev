import Link from "next/link";
import style from '../app/page.module.css';
import Buttons from "@/app/Buttons/buttons";
import Star from "./Star";

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

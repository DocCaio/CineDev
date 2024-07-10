import Link from "next/link";
import style from '../app/page.module.css';
import Buttons from "@/Buttons/buttons";

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

      <div className="flex flex-col">
        <Link href="/profiles/guscsales?lang=pt" className="hover:underline">
          Gus
        </Link>
        <Link href="/profiles/helenitas?lang=en" className="hover:underline">
          Hele
        </Link>
        <Link href="/profiles/tonysales?lang=es" className="hover:underline">
          Tony
        </Link>
      </div>
        <Buttons/>
      
      </section>
    </>
  );
}

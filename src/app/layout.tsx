import type {Metadata} from "next";
import "./globals.css";
import Link from "next/link";
import style from './layout.module.css';



export const metadata: Metadata = {
  title: "Cine Dev",
  description: "Cine system ,buy tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="text-xl font-bold">Codegus</div>
          <nav className={style.barContent} >   
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
                        <Link  className={style.links} href="#">Upcoming</Link>
                    </li>
                </ul>
              </div>    
          </nav>
        </header>

        <main className="container max-w-[800px]">{children}</main>
      </body>
    </html>
  );
}

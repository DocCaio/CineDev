
import styles from "./streaming.module.css";
import posters from '../../common/utils/path';
import Page from './page';


export const Posters = () => {
  return (

    <section id='posters' className={styles.container}>
      <h2 className={styles.title}>Main Movies</h2>
      <div className={styles.posters}>
        {posters.map((posters, id) => {
          return (
            <Page key={id} posters={posters} />

          )
        })}
      </div>
    </section>

  )
}

import Image from 'next/image';
import styles from './streaming.module.css';
import { getImageUrl } from "../common/utils/path";


type Posters = {
  title: string;
  imageSrc: string;
};

type AboutProps = {
  posters: Posters;
};

export default function About(props: AboutProps) {
  const { posters } = props;

  if (!posters) {
    return 
  }

  const { title, imageSrc } = posters;

  return (
    <>
      <div>
        <h2 className={styles.title}>Now Streaming</h2>

        <div className={styles.streaming}>
          <legend className={styles.title}>{title}</legend>
          <Image
            className={styles.img}
            width={200}
            height={200}
            alt={`image of ${title}`}
            src={getImageUrl(imageSrc)}
          />
        </div>
      </div>
    </>
  );
}

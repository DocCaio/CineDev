import { getImageUrl } from "../../../../data/utils/path";
import styles from '../streaming.module.css';
import Image from "next/image";

interface Project {
    title: string;
    imageSrc: string;
    description?: string;
}



export const Posters: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className={styles.container}>
            <Image 
                src={getImageUrl(project.imageSrc)}
                alt={`image of ${project.title}`}
                className={styles.image}
                width={100}
                height={100}
            />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
        </div>
    );
};

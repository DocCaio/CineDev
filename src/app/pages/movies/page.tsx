// Projects.tsx (or Projects.jsx)
import React from 'react';
import styles from './streaming.module.css';
//import projects from '../../../data/utils/posters.json';
//import { Posters } from './Posters/poster';

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
      <h2 className={styles.title}>Main Projects</h2>
      {/*<div className={styles.projects}>
        {projects.map((project, id) => (
          <Posters key={id} project={project} />
        ))}
      </div>*/}
    </section>
  );
};

export default Projects; // Ensure Projects is exported as default

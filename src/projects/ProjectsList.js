import React from 'react';
import ProjectSpace from './ProjectSpace';
import './ProjectsList.css';
import data from './projects-data.json';

const projects = data.map((obj, i) => {
  const { title, desc } = obj;

  // TODO: Change default
  return (
    <ProjectSpace
      id={i}
      key={title}
      name={title}
      address={desc}
      image="washkaro-logo.png"
    />
  );
});

function ProjectsList() {
  return <div className="ProjectsList">{projects}</div>;
}

export default ProjectsList;

import React from 'react';
import ProjectSpace from './ProjectSpace';
import './ProjectsList.css';
import data from './projects-data.json';

const projects = data.map((obj) => {
  return (
    <ProjectSpace
      name={obj.title}
      address={obj.desc}
      image="washkaro-logo.png"
    />
  );
});

function ProjectsList() {
  return <div className="ProjectsList">{projects}</div>;
}

export default ProjectsList;

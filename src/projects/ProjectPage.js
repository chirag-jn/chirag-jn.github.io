import React from 'react';
import data from './projects-data.json';

function ProjectPage(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;
  const { title, desc } = data[id];

  return (
    <div>
      <h1>{title}</h1>
      <h2>{desc}</h2>
    </div>
  );
}

export default ProjectPage;

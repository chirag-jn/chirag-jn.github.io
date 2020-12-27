import React from 'react';
import './ProjectSpace.css';

function ProjectSpace(props) {
  const { name, image, address } = props;
  return (
    <div className="ProjectSpace">
      <h1>{name}</h1>
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Hello"
      />
      <div>{address}</div>
    </div>
  );
}

export default ProjectSpace;

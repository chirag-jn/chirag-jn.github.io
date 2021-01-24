import React from 'react';
import './ProjectSpace.css';

function ProjectSpace(props) {
  const { name, image, address } = props;
  return (
    <div className="ProjectSpace">
      <h1>{name}</h1>
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="200"
        height="200"
        alt="Hello"
      />
      <div>{address}</div>
    </div>
  );
}

export default ProjectSpace;

import React from 'react';
import './ProjectSpace.css';
import { Link } from 'react-router-dom';

function ProjectSpace(props) {
  const { name, image, address, id } = props;
  return (
    <div className="ProjectSpace">
      {/* eslint-disable-next-line no-template-curly-in-string,jsx-a11y/anchor-is-valid */}
      <Link to={`/project/${id}`}>
        <h1>{name}</h1>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          width="200"
          height="200"
          alt={name}
        />
        <div>{address}</div>
      </Link>
    </div>
  );
}

export default ProjectSpace;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
  return (
    <div>
      <div className="Title">
        <NavLink exact to="/">
          <h2>Chirag Jain</h2>
        </NavLink>
      </div>
      <div className="item">
        <NavLink exact to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          exact
          to="/"
          // TODO: Change Resume Link
        >
          Resume
        </NavLink>
      </div>
      <div className="item">
        <NavLink exact to="/projects">
          Projects
        </NavLink>
      </div>
      <div className="item">
        <NavLink exact to="/">
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Title;

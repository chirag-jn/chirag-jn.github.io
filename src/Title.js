import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
  return (
    <div>
      <div className="Title">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/"
        >
          <h2>Chirag Jain</h2>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/projectpage"
        >
          Contact
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/projectpage"
        >
          Projects
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/projectpage"
        >
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Title;

import React from 'react';
import Title from './Title';
import ProjectsList from './projects/ProjectsList';
// import { HashRouter as DefaultRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Title />
      <ProjectsList />
    </div>
  );
};

export default App;

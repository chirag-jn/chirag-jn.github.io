import React from 'react';
import Title from './Title';
import ProjectsList from './projects/ProjectsList';
import Footer from './Footer';
// import { HashRouter as DefaultRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Title />
      <ProjectsList />
      <Footer />
    </div>
  );
};

export default App;

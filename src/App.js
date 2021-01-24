import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Title from './Title';
import ProjectsList from './projects/ProjectsList';
import Footer from './Footer';
import ProjectPage from './projects/ProjectPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={ProjectsList} />
        <Route path="/projectpage" component={ProjectPage} id={0} />
        <Route path="/projects/:id" component={ProjectsList} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

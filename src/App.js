import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Title from './Title';
import ProjectsList from './projects/ProjectsList';
import Footer from './Footer';
import About from './about/About';
import Contact from './contact/Contact';
import ProjectPage from './projects/ProjectPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={About} />
        <Route path="/projectpage" component={ProjectPage} />
        <Route path="/projects" component={ProjectsList} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects/:id" component={ProjectsList} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

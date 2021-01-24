import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Title from './title/Title';
import ProjectsList from './projects/ProjectsList';
import Footer from './footer/Footer';
import About from './about/About';
import Contact from './contact/Contact';
import ProjectPage from './projects/ProjectPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={About} />
        <Route path="/project/:id" component={ProjectPage} />
        <Route path="/projects" component={ProjectsList} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

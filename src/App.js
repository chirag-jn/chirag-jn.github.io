import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Title from './title/Title';
import ProjectsList from './projects/ProjectsList';
import Footer from './footer/Footer';
import About from './about/About';
import Home from './home/Home';
import Contact from './contact/Contact';
import ProjectPage from './projects/ProjectPage';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Title />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project/:id" component={ProjectPage} />
          <Route path="/projects" component={ProjectsList} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  );
};

export default App;

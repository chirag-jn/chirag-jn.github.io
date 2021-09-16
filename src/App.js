import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { FaSun, FaMoon, FaInstagram, FaTelegram, FaGithub, FaLinkedIn, FaFacebook } from 'react-icons/fa';
import { Flex, VStack, Heading } from '@chakra-ui/react';

const App = () => {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" fontWeight="semibold" color="cyan.400">
          Chirag Jain
        </Heading>
        <IconButton icon={<FaSun />} isRound="true" />
      </Flex>
    </VStack>
    // <Router>
    // <div className="App">
    //     <Title />
    //     <Route exact path="/" component={Home} />
    //     <Route path="/about" component={About} />
    //     <Route path="/project/:id" component={ProjectPage} />
    //     <Route path="/projects" component={ProjectsList} />
    //     <Route path="/contact" component={Contact} />
    //     <Footer />
    // </div>
    // </Router>
  );
};

export default App;

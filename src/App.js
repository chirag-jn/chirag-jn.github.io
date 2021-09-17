import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Flex, VStack, Heading, useColorMode, Spacer } from '@chakra-ui/react';
import Social from './components/Social';
import Header from './components/Header';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" fontWeight="semibold" color="cyan.400">
          Chirag Jain
        </Heading>
        <Spacer />
        <Social />
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        />
      </Flex>
      <Header />
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

import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { CloseIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import Logo from './Logo';

const MenuItems = (props) => {
  const { children, isLast, to = '/', ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <Link as={ReactLink} to={to}>
        {children}
      </Link>
    </Text>
  );
};

const MenuItemsExternal = (props) => {
  const { children, isLast, ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </Text>
  );
};

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['black', 'black', 'primary.700', 'primary.700']}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={['black', 'black', 'primary.500', 'primary.500']}
        />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <ArrowDownIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/about">About</MenuItems>
          <MenuItems to="/projects">Projects</MenuItems>
          <MenuItemsExternal>
            <Link
              href="https://drive.google.com/file/d/1cF7-87SJZNUKwdKX973aIakrvs9aOnRn/view?usp=sharing"
              isExternal
            >
              Resume
            </Link>
          </MenuItemsExternal>
          <MenuItems to="/contact" isLast>
            Contact
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;

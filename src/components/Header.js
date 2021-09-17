import { useColorMode, useMediaQuery, Text } from '@chakra-ui/react';
import { Stack, Circle, Flex, Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ name, dp }) {
  const { colorMode } = useColorMode();
  // eslint-disable-next-line no-unused-vars
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <Stack>
      {/* <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        h="300px"
        w="300px"
        alignSelf="flex-end"
      /> */}
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        spacing="200px"
        p={isNotSmallerScreen ? '32' : '0'}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? '0' : '16'} alignSelf="flex-start">
          <Text fontSize="5x1" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="6x1"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            {name}
          </Text>
        </Box>
        <Image
          alignSelf="content"
          ml={isNotSmallerScreen ? '0' : '12'}
          mb={isNotSmallerScreen ? '0' : '12'}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src={dp}
        />
      </Flex>
    </Stack>
  );
}

Header.propTypes = {
  name: PropTypes.string,
  dp: PropTypes.string,
};

Header.defaultProps = {
  name: 'Chirag Jain',
  dp: 'https://avatars.githubusercontent.com/u/31701616'
};

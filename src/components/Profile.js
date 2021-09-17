import { useColorMode, useMediaQuery, Text } from '@chakra-ui/react';
import { Stack, Circle, Flex, Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import React from 'react';
import PropTypes from 'prop-types';

export default function Profile() {
  const { colorMode } = useColorMode();
  // eslint-disable-next-line no-unused-vars
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <div>
        
    </div>
  )
}

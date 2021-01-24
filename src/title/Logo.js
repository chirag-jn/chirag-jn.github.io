import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <NavLink exact to="/">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Box {...props}>
        <Text fontSize="lg" fontWeight="bold">
          Chirag Jain
        </Text>
      </Box>
    </NavLink>
  );
}

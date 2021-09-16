import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import { FaInstagram, FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Social({ linkedin, instagram, telegram, github }) {
  return (
    <div>
      <Link href={linkedin} isExternal>
        <IconButton icon={<FaLinkedin />} isRound="true" />
      </Link>
      <Link href={telegram} isExternal>
        <IconButton icon={<FaTelegram />} ml={2} isRound="true" />
      </Link>
      <Link href={instagram} isExternal>
        <IconButton icon={<FaInstagram />} ml={2} isRound="true" />
      </Link>
      <Link href={github} isExternal>
        <IconButton icon={<FaGithub />} ml={2} isRound="true" />
      </Link>
    </div>
  );
}

Social.propTypes = {
  linkedin: PropTypes.string,
  instagram: PropTypes.string,
  telegram: PropTypes.string,
  github: PropTypes.string,
};

Social.defaultProps = {
  linkedin: 'https://www.linkedin.com/in/jnchirag/',
  instagram: 'https://www.instagram.com/_chirag_jn/',
  telegram: 'https://telegram.me/jnchirag',
  github: 'https://github.com/chirag-jn',
};

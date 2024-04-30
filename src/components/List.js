import { Box, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import React from 'react';

const List = () => {
  return (
    <UnorderedList>
      <ListItem
        display='flex'
        alignItems='center'
        gap={2}
        fontSize={18}
        mt={8}
        mb={5}
      >
        <IoLogoGithub size={32} />
        GitHub
      </ListItem>

      <ListItem
        display='flex'
        alignItems='center'
        gap={2}
        fontSize={18}
        mb={5}
      >
        <FaSquareXTwitter size={32} />
        Twitter
      </ListItem>
      <ListItem
        display='flex'
        alignItems='center'
        gap={2}
        fontSize={18}
        mb={5}
      >
        <FaInstagramSquare size={32} />
        Instagram
      </ListItem>
      <ListItem
        display='flex'
        alignItems='center'
        gap={2}
        fontSize={18}
      >
        <FaDiscord size={32} />
        Discord
      </ListItem>
    </UnorderedList>
  );
};

export default List;

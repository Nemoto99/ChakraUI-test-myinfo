import { HStack, Img, Text } from '@chakra-ui/react';
import React from 'react';
import characters from '../images/characters.png';

const ChakraActivity = () => {
  return (
    <>
      <Text
        fontSize='4xl'
        fontWeight='bold'
        mt={-2}
        mb={4.5}
      >
        Activity
      </Text>
      <HStack spacing={10}>
        <Img
          src={characters}
          h='vh'
          w='30%'
          boxShadow='lg'
          cursor='pointer'
        />
        <Img
          src={characters}
          h='vh'
          w='30%'
          boxShadow='lg'
          cursor='pointer'
        />
        <Img
          src={characters}
          h='vh'
          w='30%'
          boxShadow='lg'
          cursor='pointer'
        />
      </HStack>
    </>
  );
};

export default ChakraActivity;

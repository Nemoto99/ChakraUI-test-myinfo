import { Button, FormControl, FormLabel, Input, Flex, Textarea } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa6';
import React from 'react';

const ChakraContact = ({ colorMode }) => {
  return (
    <Flex direction='column'>
      <FormControl mt={0}>
        <Input
          placeholder='name'
          required
          w='40%'
        />
      </FormControl>

      <FormControl mt={6}>
        <Textarea
          placeholder='Contact'
          required
        />
      </FormControl>

      <Flex justifyContent='flex-end'>
        {' '}
        {/* 右寄せするFlexコンポーネント */}
        <Button
          mt={6}
          backgroundColor={colorMode === 'light' ? '#2F3030' : 'white'}
          color={colorMode === 'light' ? 'white' : 'black'}
          borderRadius={0}
          alignItems='center'
          w={130}
          h={12}
          fontWeight='bold'
          gap={2}
        >
          Submit
          <FaCheck />
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChakraContact;

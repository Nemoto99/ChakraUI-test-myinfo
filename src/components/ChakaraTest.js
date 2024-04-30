import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Text,
  DrawerFooter,
} from '@chakra-ui/react';
import { BiRightArrow } from 'react-icons/bi';
import List from './List';

const ChakaraTest = ({ colorMode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        backgroundColor={colorMode === 'light' ? '#2F3030' : '#ffffff'}
        opacity={1}
        color={colorMode === 'light' ? 'white' : 'black'}
        fontWeight='bold'
        borderRadius={0}
        w={120}
        h={12}
        onClick={onOpen}
        mr={38}
        mt={19.5}
        alignItems='center'
        gap={3}
      >
        More
        <BiRightArrow />
        {/* <PiArrowSquareRightFill /> */}
      </Button>
      <Drawer
        placement='right'
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>More info</DrawerHeader>
          <DrawerBody>
            <Text>
              I use Github, Twitter, instagram and Discord. Here are my accounts. Please follow me.
            </Text>
            <List />
          </DrawerBody>
          <DrawerFooter>
            <Text color='#939794'>Made by Shunichi Nemoto</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChakaraTest;

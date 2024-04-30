import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ChakraModal } from './ChakraModal';
import ChakaraTest from './ChakaraTest';
import ChakraTab from './ChakraTab';
import DarkmodeBtn from './DarkmodeBtn';

const ChakraCard = () => {
  const { colorMode, toggleColorMode } = useColorMode('light');

  return (
    <Stack
      align='center'
      justify='center'
      height='100vh'
    >
      <Card
        size='lg'
        w={1000}
        h={600}
        boxShadow='lg'
        borderRadius={0}
        bg={colorMode === 'light' ? '#ffffff' : 'black'}
      >
        <CardHeader mt={20}>
          <DarkmodeBtn
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
          />
          <Flex
            spacing='4'
            ml={38}
          >
            <Flex
              flex='1'
              gap='4'
              alignItems='center'
              flexWrap='wrap'
            >
              <Avatar
                name='Segun Adebayo'
                src='https://bit.ly/sage-adebayo'
                size='2xl'
                mr={3}
              />

              <Box>
                <Heading
                  size='sm'
                  fontSize='3xl'
                  mb={3}
                >
                  Shunichi Nemoto20
                </Heading>
                <Text
                  fontWeight='bold'
                  color='gray'
                >
                  ISC student・Web developer
                </Text>
              </Box>
            </Flex>
            <ChakaraTest colorMode={colorMode} />
          </Flex>
        </CardHeader>
        <CardBody>
          <hr class='border' />
          <ChakraTab colorMode={colorMode} />
        </CardBody>
      </Card>
    </Stack>
  );
};

export default ChakraCard;

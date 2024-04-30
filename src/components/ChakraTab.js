import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';
import ChakraContact from './ChakraContact';
import ChakraActivity from './ChakraActivity';

const ChakraTab = ({ colorMode }) => {
  return (
    <Tabs
      position='relative'
      variant='unstyled'
      ml={6}
    >
      <TabList
        pt={2}
        gap={3}
      >
        <Tab
          _selected={
            colorMode === 'light'
              ? { fontWeight: 'bold', color: 'black' }
              : { fontWeight: 'bold', color: 'white' }
          }
          color='gray'
        >
          About
        </Tab>
        <Tab
          _selected={
            colorMode === 'light'
              ? { fontWeight: 'bold', color: 'black' }
              : { fontWeight: 'bold', color: 'white' }
          }
          color='gray'
        >
          Activity
        </Tab>
        <Tab
          _selected={
            colorMode === 'light'
              ? { fontWeight: 'bold', color: 'black' }
              : { fontWeight: 'bold', color: 'white' }
          }
          color='gray'
        >
          Contact
        </Tab>
      </TabList>
      <TabIndicator
        mt='-1.5px'
        height='2px'
        bg='blue.500'
        borderRadius='1px'
      />
      <TabPanels>
        <TabPanel>
          <Text
            fontWeight='bold'
            fontSize={30}
          >
            Hi. Im Shunichi Nemoto.
          </Text>
        </TabPanel>
        <TabPanel>
          <ChakraActivity />
        </TabPanel>
        <TabPanel>
          <ChakraContact colorMode={colorMode} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ChakraTab;

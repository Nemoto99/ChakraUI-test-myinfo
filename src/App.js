import './App.css';
import { Box, ChakraProvider, useColorMode } from '@chakra-ui/react';
import ChakraCard from './components/ChakraCard';

const App = () => {
  return (
    <ChakraProvider>
      <AppContent />
    </ChakraProvider>
  );
};

const AppContent = () => {
  const { colorMode } = useColorMode();

  return (
    <div className='app'>
      <Box bg={colorMode === 'light' ? '#f3f3f2' : '#2F3030'}>
        <ChakraCard />
      </Box>
    </div>
  );
};

export default App;

import React from 'react';
import { Flex } from '@chakra-ui/react';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';

const DarkmodeBtn = ({ colorMode, toggleColorMode }) => {
  return (
    <Flex // Flexコンポーネントを追加して親要素を作成
      position='absolute'
      top='6'
      right='6'
    >
      {colorMode === 'light' ? (
        <MdOutlineDarkMode
          onClick={toggleColorMode}
          size={28}
          cursor='pointer'
        />
      ) : (
        <MdDarkMode
          onClick={toggleColorMode}
          size={28}
          color='yellow'
          cursor='pointer'
        />
      )}
    </Flex>
  );
};

export default DarkmodeBtn;

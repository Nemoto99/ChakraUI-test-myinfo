import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

export const ChakraModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>新規登録</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>アカウント新規登録</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>お名前</FormLabel>
              <Input
                ref={initialRef}
                placeholder='日本太郎'
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>メールアドレス</FormLabel>
              <Input
                placeholder='samaple@xxx.com'
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>パスワード</FormLabel>
              <Input
                placeholder='パスワードを入力してください'
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>パスワード確認</FormLabel>
              <Input
                placeholder='もう一度パスワードを入力してください'
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
            >
              登録
            </Button>
            <Button onClick={onClose}>戻る</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

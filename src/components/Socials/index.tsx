import {
    Box, Stack, Text, Icon, Button, HStack,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure,
} from "@chakra-ui/react"
import { FaLinkedin, FaGithub, FaTwitch } from "react-icons/fa"
import { ContactModal } from "../ContactModal"

export const Socials = () => {
    const { isOpen, onOpen, onClose, } = useDisclosure()
    return (
        <Box marginTop={5}>
            <Button onClick={onOpen} bgColor='#FF8B00' height={['12vh']} width={['fit-content', null, null, '15vw']}>
                <Stack fontSize={['md', null, 'x-large']}>
                    <Text textAlign='center' color='black'>
                        Contact Me
                    </Text>
                    <HStack color='black' justify='center'>
                        <FaLinkedin /> <FaGithub /> <FaTwitch />
                    </HStack>
                </Stack>
            </Button>
            <Modal size='lg' isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='5px' />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody borderRadius={10} bg={'#FF8B00'}>
                        <ContactModal />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}
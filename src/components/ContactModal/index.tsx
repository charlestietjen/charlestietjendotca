import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa"
import { Box, SimpleGrid, Link, Icon, Heading } from '@chakra-ui/react'
export const ContactModal = () => {
    return (
        <Box>
            <Heading m={2} textAlign='center' fontSize='x-large'>
                Find Me and Contact Me!
            </Heading>
            <SimpleGrid m={2} textAlign='center' fontSize='xxx-large' columns={3}>
                <Link href='https://github.com/charlestietjen'>
                    <Icon as={FaGithub} />
                </Link>
                <Link href='https://www.linkedin.com/in/charles-tietjen-001/'>
                    <Icon as={FaLinkedin} />
                </Link>
                <Link href='https://www.twitch.tv/lowlevelgoblinhours'>
                    <Icon as={FaTwitch} />
                </Link>
            </SimpleGrid>
        </Box>
    )
}
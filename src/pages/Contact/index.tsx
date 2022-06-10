import { Heading, Icon, Box, Stack, FormControl, FormLabel, FormHelperText, Link, SimpleGrid } from "@chakra-ui/react"
import { FaLinkedin, FaGithub, FaTwitch } from "react-icons/fa"

export const Contact = () => {
    return (
        <Stack align='center'>
            <Stack align='center' gap={3} bg='whiteAlpha.800' maxW='90%' p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                <Heading>Contact Me</Heading>
                <SimpleGrid fontSize={'xxx-large'} gap={10} columns={3}>
                    <Link href='https://www.linkedin.com/in/charles-tietjen-001/' isExternal><FaLinkedin /></Link>
                    <Link href='https://github.com/charlestietjen' isExternal><FaGithub /></Link>
                    <Link href='https://www.twitch.tv/lowlevelgoblinhours' isExternal><FaTwitch /></Link>
                </SimpleGrid>
            </Stack>
        </Stack>
    )
}
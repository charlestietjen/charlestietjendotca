import { Heading, Box, Stack, SimpleGrid, Container, Image, Text } from "@chakra-ui/react"
import aboutMeImage from '../../assets/image/aboutme.jpg'

export const About = () => {
    return (
        <Stack align='center'>
            <Box bg='whiteAlpha.800' maxW='90%' p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                <Heading textAlign='center' textShadow={'1px 1px #000000'}>Charles Tietjen</Heading>
                <Heading fontSize={['x-large']} textAlign='center' textShadow={'1px 1px #000000'} m={3}>Full Stack Developer</Heading>
                <SimpleGrid columns={[1, null, 2]}>
                    <Image alt={`Charles Tietjen and his son.`} justifySelf='center' boxShadow={'2xl'} borderRadius={'md'} boxSize={['50vw', null, '20vw']} m={4} src={aboutMeImage} />
                    <Container alignSelf='center'>
                        <Stack fontSize='md' gap={2}>
                            <Text>
                                Full stack web developer, hobbyist video game developer, extremely cool dad.
                            </Text>
                            <Text>
                                I build beautiful and functional front-end applications as well as safe and efficient back-ends.
                            </Text>
                            <Text>
                                My work is usually within the MERN stack however I relish the oppurtunity to learn new languages, platforms, libraries and tools.
                            </Text>
                        </Stack>
                    </Container>
                </SimpleGrid>
            </Box>
        </Stack>
    )
}
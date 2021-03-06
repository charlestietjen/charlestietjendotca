import { useEffect } from 'react'
import { Heading, Box, Stack, SimpleGrid, Container, Image, Text } from "@chakra-ui/react"
import aboutMeImage from '../../assets/image/aboutme.jpg'
import { Document, Page } from "react-pdf"
import resume from '../../assets/pdf/resume.pdf'

export const About = () => {
    useEffect(() => {
        document.title = 'Charles Tietjen - Full Stack Developer'
    }, [])
    return (
        <Stack maxH='100vh' overflowY='scroll' align='center' gap={'15vh'} pb={'10vh'}>
            <Box mt={['15vh', null, '10vh']} bg='whiteAlpha.800' w={['90vw',null,'55vw']} p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                <Heading textAlign='center' textShadow={'1px 1px #000000'}>Charles Tietjen</Heading>
                <Heading fontSize={['x-large']} textAlign='center' textShadow={'1px 1px #000000'} m={3}>Full Stack Developer</Heading>
                <SimpleGrid columns={[1, null, 2]}>
                    <Image alt={`Charles Tietjen and his son.`} justifySelf='center' boxShadow={'dark-lg'} border={'solid gray thin'} borderRadius={'100%'} boxSize={['50vw', null, '20vw']} m={4} src={aboutMeImage} />
                    <Container alignSelf='center'>
                        <Stack fontSize='md' gap={2}>
                            <Text>
                                Full stack web developer, hobbyist video game developer, extremely cool dad.
                            </Text>
                            <Text>
                                I build beautiful and functional front-end applications as well as safe and efficient back-ends.
                            </Text>
                            <Text>
                                My work is usually within the MERN stack however I relish the opportunity to learn new languages, platforms, libraries and tools.
                            </Text>
                        </Stack>
                    </Container>
                </SimpleGrid>
            </Box>
        </Stack>
    )
}
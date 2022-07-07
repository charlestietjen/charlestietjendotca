import { useEffect } from 'react'
import { Stack, Box, Container, Image, SimpleGrid, Icon } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

export const NotDiscord = () => {
    useEffect(() => {
        document.title = 'Not-Discord'
    }, [])
    return (
        <Stack maxH='100vh' overflowY='scroll' scrollSnapType={'y mandatory'} align='center' gap={3} pb={'10vh'}>
            <Box mt={['15vh', null, '10vh']} bg='whiteAlpha.800' w={['90vw', null, '55vw']} p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                <SimpleGrid columns={2}>
                    <Stack fontSize={['x-small', null, 'medium']}>
                        <Container >
                            Not-Discord is a very small scale socket based chat application.
                        </Container>
                        <Container>
                            It's as simple as enter a name and go!
                        </Container>
                        <Container>
                            This was a personal project I set myself after being first introduced to React. My goal was primarily to become more familiar with React but
                            I also wanted to explore using web sockets, which was also new territory for me.
                        </Container>
                        <Container>
                            The front and back both use socket.io's versatile framework for web socket traffic to communicate in real time.
                        </Container>
                        <Container>
                            The result was not-discord/goblin hours.
                        </Container>
                    </Stack>
                    <Image borderRadius={'md'} alt='A name entry screen.' justifySelf={'center'} maxH='20vmax' src='assets/image/not-discord-name.png' />
                </SimpleGrid>
            </Box>
        </Stack>
    )
}
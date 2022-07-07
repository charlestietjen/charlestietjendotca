import { useEffect, useState } from 'react'
import { Box, Center, Stack, Container, Text, Link, Heading, Icon, List, ListItem, Flex, IconButton } from '@chakra-ui/react'
import { FaExternalLinkAlt, FaRedo } from 'react-icons/fa'

export const GoblinRunner = () => {
    const [leaderboard, setLeaderboard] = useState([{ _id: '', name: '', score: 0, position: 0 }])

    const getNewLeaderboard = async () => {
        const response = await fetch('/api/leaderboard')
        if (response.ok) {
            console.log(response)
            const data = await response.json()
            console.log(data)
            setLeaderboard(data)
        }
    }

    useEffect(() => {
        getNewLeaderboard()
        document.title = 'Goblin Runner'
    }, [])
    return (
        <Box w={'100%'} maxH={'95vh'} overflowY={['auto', null, 'hidden']}>
            <Flex marginY={10} justifyContent={['space-between', null, 'space-evenly']} flexDirection={['column', null, 'row']}>
                <Center mb={4}>
                    <Box bg='whiteAlpha.800' w={['90vw', null, '55vw']} p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                        <Stack align='center'>
                            <Heading>Goblin Runner</Heading>
                            <Box h={['50vh', null, '60vh']} w={'100%'}>
                                <iframe style={{ width: '100%', height: '100%' }} src={`${process.env.PUBLIC_URL}/goblinRunner/goblinRunner.html`} />
                            </Box>
                            <Container>
                                <Text>
                                    Sound effects by <Link href='https://www.youtube.com/watch?v=dbACpSy9FWY' isExternal>{`Juhani Junkala `}<Icon as={FaExternalLinkAlt} /></Link>
                                </Text>
                                <Text>
                                    Music by <Link href='https://soundcloud.com/cleytonkauffman' isExternal>{`Cleyton Kauffman `}<Icon as={FaExternalLinkAlt} /></Link>
                                </Text>
                                <Text>
                                    All other assets produced by Charles Tietjen
                                </Text>
                            </Container>
                        </Stack>
                    </Box>
                </Center>
                <Center>
                    <Box overflowY={'scroll'} bg='whiteAlpha.800' w={['90vw', null, '25vw']} minH={'70vh'} maxH={'90vh'} p={4} borderRadius={'md'} boxShadow={'dark-lg'}>
                        <Flex alignItems={'center'}>
                            <IconButton boxShadow={'dark-lg'} aria-label='Refresh leaderboard' onClick={getNewLeaderboard} icon={<FaRedo />} />
                            <Heading m={3} textAlign='center'>High Scores</Heading>
                        </Flex>
                        <Container>
                            <List>
                                {!leaderboard ? ('') : (
                                    leaderboard.map((element, i) => (
                                        <ListItem key={element._id}>
                                            <Text>{`${i + 1}. ${element.name}: ${element.score}`}</Text>
                                        </ListItem>
                                    ))
                                )}
                            </List>
                        </Container>
                    </Box>
                </Center>
            </Flex>
        </Box>
    )
}
import { useEffect } from 'react'
import { Stack, Box, Image, Container } from '@chakra-ui/react'

export const SpacedOut = () => {
    useEffect(() => {
        document.title = 'spacedOut'
    }, [])
    return (
        <Stack maxH='100vh' overflowY='scroll' scrollSnapType={'y mandatory'} align='center' gap={3} pb={'10vh'}>
            <Box mt={['15vh', null, '10vh']} bg='whiteAlpha.800' w={['90vw', null, '55vw']} p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                <Stack fontSize={['small',null,'medium']} align='center'>
                    <Image maxW='25vmax' borderRadius={'md'} src='assets/image/spaced-out.png' />
                    <Container>Spacedout is an anonymous social media platform with a mental health focus.</Container>
                    <Container>The purpose of this project was to write a safe and stable back-end with user authentication and data storage using a SQL database.</Container>
                    <Container>Spacedout is a fully deployed social media platform with functioning signups, authentication, posting and post management.</Container>
                </Stack>
            </Box>
        </Stack>
    )
}
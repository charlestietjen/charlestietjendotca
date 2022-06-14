import { Box, Container, Text, SimpleGrid, Stack } from "@chakra-ui/react"

export const KitchenGoblin = () => {
    return (
        <Stack maxH='100vh' overflowY='scroll' scrollSnapType={'y mandatory'} align='center' gap={3} pb={'10vh'}>
            <Box mt={['15vh', null, '10vh']} bg='whiteAlpha.800' w={['90vw', null, '55vw']} p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                <Stack align='center'>
                </Stack>
            </Box>
        </Stack>
    )
}
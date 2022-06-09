import { Center, Stack, Heading, Text, } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Heading
        bgGradient='linear-gradient(90deg, rgba(68,68,68,1) 39%, rgba(254,255,219,1) 89%)'
        bgClip='text'
        fontWeight='800'
        fontSize={['1.5em','2em','3em']}
        m={7}>
            Charles Tietjen
        </Heading>
        // <Stack>
        //     <Center>

        //     </Center>
        //     <Center>
        //         <Text color='white' m={1}>
        //             Full Stack Developer
        //         </Text>
        //     </Center>
        // </Stack>
    )
}
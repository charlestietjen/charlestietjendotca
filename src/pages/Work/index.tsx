import { Box, Center, Stack, } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import { Project } from "../../components/Project"
import { projects } from "../../lib/projects"

export const Work = () => {
    return (
        // <Box h='100vh' scrollSnapType={'y mandatory'} overflowY={'scroll'}>
        //     <Stack h={'100vh'} align='center'>
        //     {/* <Carousel>
        //         {projects.map((project, i) => (
        //             <Box scrollSnapAlign='start' key={i} pb={'30vh'}>
        //                 <Project key={i} project={project} />
        //             </Box>
        //         ))}
        //         </Carousel> */}
        //     </Stack>
        // </Box>
        <Box h='100%' maxW='100vw'>
            <Center>
            <Carousel width={'100vw'} showThumbs={false} showStatus={false} autoFocus>
                {projects.map((project, i) => (
                    <Center key={i}>
                        <Project project={project} />
                    </Center>
                ))}
            </Carousel>
            </Center>
        </Box>
    )
}
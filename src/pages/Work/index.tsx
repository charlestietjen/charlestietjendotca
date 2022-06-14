import { Box, Stack, } from "@chakra-ui/react"
import { Project } from "../../components/Project"
import { projects } from "../../lib/projects"

export const Work = () => {
    return (
        <Box h='100vh' scrollSnapType={'y mandatory'} overflowY={'scroll'}>
            <Stack h={'100vh'} align='center'>
                {projects.map((project, i) => (
                    <Box scrollSnapAlign='start' key={i} pb={'30vh'}>
                        <Project key={i} project={project} />
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}
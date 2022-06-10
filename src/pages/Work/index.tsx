import { Box, Stack, } from "@chakra-ui/react"
import { Project } from "../../components/Project"
import { projects } from "../../lib/projects"

export const Work = () => {
    return (
        <Box w='100vw'>
            <Stack scrollSnapType={'y mandatory'} maxH='90vh' pt={10} overflowY={'scroll'} align='center' gap={20}>
                {projects.map((project, i) => (
                    <Box key={i} scrollSnapAlign='center'>
                        <Project key={i} project={project} />
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}
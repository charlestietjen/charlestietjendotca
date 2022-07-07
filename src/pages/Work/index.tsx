import { useEffect } from 'react'
import { Box, Center, Stack, } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import { Project } from "../../components/Project"
import { projects } from "../../lib/projects"

export const Work = () => {
    useEffect(() => {
        document.title = 'My Work'
    }, [])
    return (
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
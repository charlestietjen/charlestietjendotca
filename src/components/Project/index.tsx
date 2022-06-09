import { Box, SimpleGrid, Stack, Heading, Container, Text, Image, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export const Project = ({ project }: { project: { name: string; blurb: string; gitUrl: string; deployUrl: string; } }) => {
    return (
        <Box width={['80vw', null, '50vw']} bg='blackAlpha.500' borderRadius={'md'} boxShadow={'dark-lg'} m={10}>
            <Stack p={4} gap={3}>
                <Heading textShadow={'1px 1px #000000'} m={3}>
                    {project.name}
                </Heading>
                <Image alt={`Deployed ${project.name}`} alignSelf='center' boxShadow={'2xl'} borderRadius={'md'} boxSize={['25%', null, '30%']} m={4} src={`${project.gitUrl}/raw/main/img/project-ss.png`} />
                <SimpleGrid alignSelf='center' columns={2} gap={10}>
                    <Link boxShadow='dark-lg' bg='#FF8B00' color='black' p={1} borderRadius={8} w='fit-content' href={project.deployUrl} isExternal>
                        <Text fontSize={['md', null, 'lg']}>
                        Deployed 
                        <Icon as={FaExternalLinkAlt} />
                        </Text>
                    </Link>
                    <Link boxShadow='dark-lg' bg='#FF8B00' color='black' p={1} borderRadius={8} w='fit-content' href={project.gitUrl} isExternal>
                        <Text fontSize={['md', null, 'lg']}>
                        Repository
                        <Icon as={FaGithub} />
                        </Text>
                    </Link>
                </SimpleGrid>
                <Container alignSelf='center'>
                    <Text fontSize={['md', null, 'lg']} textAlign='center'>
                        {project.blurb}
                    </Text>
                </Container>
            </Stack>
        </Box>
    )
}
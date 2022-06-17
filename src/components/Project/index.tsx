import { Box, SimpleGrid, Stack, Heading, Container, Text, Image, Link, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { projects } from "../../lib/projects";
export const Project = ({ project }: { project: { name: string; blurb: string; gitUrl: string; deployUrl: string; image: string; id: string; icons: { src: string; label: string; }[]; } }) => {
    return (
        <Box maxW={['90vw', null, '55vw']} bg='whiteAlpha.800' borderRadius={'md'} p={4} boxShadow={'dark-lg'}>
            <Stack p={4} gap={3}>
                <Heading textAlign={'center'} fontSize={['x-large',null,'xxx-large']} textShadow={'1px 1px #000000'} m={3}>
                    {project.name}
                </Heading>
                <SimpleGrid h={['100%']} columns={2} gap={0}>
                    <Box>
                        <Image alt={`Deployed ${project.name}`} boxShadow={'2xl'} borderRadius={'md'} maxW={['60%']} m={'auto'} src={`/assets/image/${project.image}`} />
                    </Box>
                    <Box h='100%' mt={['40%', null, '10%']}>
                        <Carousel showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true} showArrows={false} autoPlay>
                            {project.icons.map((icon, i) => (
                                <Stack key={i} h='100%' align='center'>
                                    <Image zIndex={1} alignSelf='center' h='100%' maxW={['15vw']} src={icon.src} />
                                    <Text>{icon.label}</Text>
                                </Stack>
                            ))}
                        </Carousel>
                    </Box>
                </SimpleGrid>
                <SimpleGrid alignSelf='center' columns={2} gap={10}>
                    <Link boxShadow='dark-lg' bg='#C70A80' color='black' p={1} borderRadius={8} w='fit-content' href={project.deployUrl} isExternal>
                        <Text fontSize={['md', null, 'lg']}>
                            Deployed
                            <Icon ml={2} as={FaExternalLinkAlt} />
                        </Text>
                    </Link>
                    <Link boxShadow='dark-lg' bg='#C70A80' color='black' p={1} borderRadius={8} w='fit-content' href={project.gitUrl} isExternal>
                        <Text fontSize={['md', null, 'lg']}>
                            Repository
                            <Icon ml={2} as={FaGithub} />
                        </Text>
                    </Link>
                </SimpleGrid>
                <Container>
                    <Text w={['80vw', null, '50vw']} textAlign='left' fontSize={['small', 'medium']}>
                        {project.blurb}
                    </Text>
                </Container>
                <Link boxShadow='dark-lg' w='fit-content' bg='#C70A80' p={1} px={10} borderRadius={8} alignSelf='center' as={RouterLink} to={`/${project.id}`}>Read more...</Link>
            </Stack>
        </Box>
    )
}
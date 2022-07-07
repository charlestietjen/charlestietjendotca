import { useEffect } from 'react'
import { Box, Container, Text, SimpleGrid, Image, Heading, Stack, Icon, Button } from "@chakra-ui/react"
import { FaChevronDown } from 'react-icons/fa'
import { Carousel } from "react-responsive-carousel"
import apollo from '../../assets/image/apolloicon.svg'
import chakraui from '../../assets/image/chakrauiicon.svg'
import express from '../../assets/image/expressicon.svg'
import mongo from '../../assets/image/mongoicon.svg'
import node from '../../assets/image/nodeicon.svg'
import react from '../../assets/image/reacticon.svg'

export const KitchenGoblin = () => {
    useEffect(() => {
        document.title = 'Kitchen Goblin'
    }, [])
    return (
        <Stack maxH='100vh' overflowY='scroll' scrollSnapType={'y mandatory'} align='center' gap={3} pb={'10vh'}>
            <Box mt={['15vh', null, '10vh']} bg='whiteAlpha.800' w={['90vw', null, '55vw']} p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                <Stack gap={4} align='center'>
                    <Heading textAlign='center' fontSize={['x-large', null, 'xx-large']}>What is it though?</Heading>
                    <SimpleGrid gap={3} columns={[1, null, 2]}>
                        <Image borderRadius={'md'} justifySelf={'center'} src='assets/image/kitchen-goblin.png' maxH='30vmax' />
                        <Container textAlign='left' fontSize={['small', null, 'medium']}>
                            <Text mt={5}>Kitchen Goblin is a recipe book web application and sharing platform with a focus on 'iterative' recipes.</Text>
                            <Text mt={5}>This application was and continues to be a full stack MERN project for me. A group project at the end of my boot camp certification that I opted to build alone.</Text>
                            <Text mt={10} mb={5}>Key technologies:</Text>
                            <Carousel showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true} showArrows={false} autoPlay>
                                <Container>
                                    <Image zIndex={1} alignSelf='center' h='100%' maxW={['15vw']} src={node} />
                                    <Text>Node.js</Text>
                                </Container>
                                <Container>
                                    <Image zIndex={1} alignSelf='center' h='100%' maxW={['15vw']} src={apollo} />
                                    <Text>Apollo GraphQL</Text>
                                </Container>
                                <Container>
                                    <Image zIndex={1} alignSelf='center' h='100%' maxW={['15vw']} src={react} />
                                    <Text>React</Text>
                                </Container>
                                <Container>
                                    <Image zIndex={1} alignSelf='center' h='100%' mt='20%' maxW={['15vw']} src={express} />
                                    <Text>Express.js</Text>
                                </Container>
                                <Container>
                                    <Image zIndex={1} alignSelf='center' h='100%' maxW={['15vw']} src={mongo} />
                                    <Text>MongoDB</Text>
                                </Container>
                                <Container>
                                    <Image zIndex={1} alignSelf='center' h='100%' maxW={['15vw']} src={chakraui} />
                                    <Text>Chakra-UI</Text>
                                </Container>
                            </Carousel>
                        </Container>
                    </SimpleGrid>
                </Stack>
            </Box>
            <Icon fontSize='xxx-large' color='blackAlpha.700' as={FaChevronDown} />
            <Box mt={['15vh', null, '10vh']} bg='whiteAlpha.800' w={['90vw', null, '55vw']} p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                <Stack align='center' fontSize={['small', null, 'medium']}>
                    <Container >
                        Kitchen Goblin has a safe and secure back-end server, all user information is encrypted and the entire app makes use of JSON web tokens to verify user sessions and legitimate actions before they are actioned.
                    </Container>
                    <Container>
                        We use a GraphQL API, capable of precise and robust responses to requests.
                    </Container>
                    <Container>
                        Open source under an MIT license, all code is viewable and free to re-use.
                    </Container>
                </Stack>
            </Box>
            <Icon fontSize='xxx-large' color='blackAlpha.700' as={FaChevronDown} />
            <Box mt={['15vh', null, '10vh']} bg='whiteAlpha.800' w={['90vw', null, '55vw']} p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                <Stack align='center' fontSize={['small',null,'medium']}>
                    <Container>
                        Our front end is modern, accessible, efficient and continuously being improved upon.
                    </Container>
                    <Image borderRadius={'md'} src='assets/image/kitchengoblin-recipedetails.png' />
                    <Container>
                        And to top it all off we're mobile-first and available as a progressive web app.
                    </Container>
                </Stack>
            </Box>
        </Stack>
    )
}
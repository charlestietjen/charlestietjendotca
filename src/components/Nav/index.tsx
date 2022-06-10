import { useEffect, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Link, SimpleGrid, Text, Box, Flex, Icon } from '@chakra-ui/react'
import { FaCode, FaCommentDots, FaBlog, FaUserTie } from "react-icons/fa"

export const Nav = () => {
    const [navState, setNavState] = useState('')
    const location = useLocation()
    useEffect(() => {
        setNavState(location.pathname)
    }, [location])
    return (
        <Flex bg='blackAlpha.500' color='white' boxShadow={'dark-lg'} h='100%' w='100%' justifyContent={'space-evenly'}>
            <Link border={'solid thin white'} w='100%' h='100%' alignSelf='center' as={RouterLink} to={'/work'}>
                <Box>
                    <Text marginTop={3} textAlign='center'>My Work</Text>
                    <Text textAlign='center' fontSize={['xx-large']}><Icon as={FaCode}/></Text>
                </Box>
            </Link>
            <Link border={'solid thin white'} w='100%' h='100%' alignSelf='center' as={RouterLink} to={'/'}>
                <Box>
                    <Text marginTop={3} textAlign='center'>Me</Text>
                    <Text textAlign='center' fontSize={['xx-large']}><Icon as={FaUserTie}/></Text>
                </Box>
            </Link>
            <Link border={'solid thin white'} w='100%' h='100%' alignSelf='center' as={RouterLink} to={'/blog'}>
                <Box>
                    <Text marginTop={3} textAlign='center'>My Blog</Text>
                    <Text textAlign='center' fontSize={['xx-large']}><Icon as={FaBlog}/></Text>
                </Box>
            </Link>
            <Link border={'solid thin white'} w='100%' h='100%' alignSelf='center' as={RouterLink} to={'/contact'}>
                <Box>
                    <Text marginTop={3} textAlign='center'>Contact Me</Text>
                    <Text textAlign='center' fontSize={['xx-large']}><Icon as={FaCommentDots}/></Text>
                </Box>
            </Link>
        </Flex>
    )
}
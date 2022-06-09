import { useEffect, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Link, SimpleGrid, Text, Box } from '@chakra-ui/react'

export const Nav = () => {
    const [navState, setNavState] = useState('')
    const location = useLocation()
    useEffect(() => {
        setNavState(location.pathname)
    }, [location])
    return (
        <SimpleGrid fontSize={['small',null,'medium']} columns={2}>
            <Link as={RouterLink} to={'/'}>
                <Box bg={navState === '/blog'?('#FF8B00'):'#000000'}>
                    <Text color={navState === '/blog'?('#000000'):'#FFFFFF'}>Me and My Work</Text>
                </Box>
            </Link>
            <Link as={RouterLink} to={'/blog'}>
                <Box bg={navState === '/blog'?('#000000'):'#FF8B00'}>
                    <Text color={navState === '/blog'?('#FFFFFF'):'#000000'}>The Blog</Text>
                </Box>
            </Link>
        </SimpleGrid>
    )
}
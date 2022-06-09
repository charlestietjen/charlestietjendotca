import { Center, Stack, Heading, Text, Link } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'

export const Header = () => {
    return (
        <Link as={RouterLink} to='/'>
            <Heading
                bgGradient='linear-gradient(90deg, rgba(68,68,68,1) 39%, rgba(254,255,219,1) 89%)'
                bgClip='text'
                fontWeight='800'
                fontSize={['1.5em', '2em', '3em']}
                p={[6,null,8]}
                >
                Charles Tietjen
            </Heading>
        </Link>
    )
}
import { useState, useEffect } from 'react'
import { Heading, Icon, Box, Stack, FormControl, FormLabel, FormHelperText, FormErrorMessage, Link, SimpleGrid, Text, Input, Textarea, Button } from "@chakra-ui/react"
import { FaLinkedin, FaGithub, FaTwitch } from "react-icons/fa"

export const Contact = () => {
    const [formState, setFormState] = useState({ subject: 'Re: charlestietjen.ca', body: '', name: '' })

    const handleChange = (ev: React.ChangeEvent<HTMLFormElement>) => {
        if (!ev.target.value) return
        setFormState({ ...formState, [ev.target.name]: ev.target.value })
    }

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        const { subject, body, name } = formState
        if (!body) return
        window.open(`mailto:tietjen.charles@gmail.com?subject=${subject}&body=${body}%0A%0ARegards,%0A%0A${name}`)
    }
    useEffect(() => {
        document.title = 'Contact me'
    }, [])
    return (
        <Box w={'100vw'}>
            <Stack align='center' overflowY='scroll'>
                <Stack align='center' gap={3} bg='whiteAlpha.800' w={['90vw', null, '55vw']} p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                    <Heading>Contact Me</Heading>
                    <Text fontSize={'large'}>Send me an email:</Text>
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                        <FormControl>
                            <FormLabel htmlFor='name'>Your Name:</FormLabel>
                            <Input mb={3} placeholder='Enter your name...' bg={'blackAlpha.400'} boxShadow={'2xl'} name='name' type='text' isRequired />
                            <FormLabel htmlFor='subject'>Subject:</FormLabel>
                            <Input mb={3} placeholder='Enter a subject...' bg={'blackAlpha.400'} boxShadow={'2xl'} name='subject' type='text' isRequired />
                            <FormLabel htmlFor='body'>Email:</FormLabel>
                            <Textarea mb={3} name='body' rows={3} w={['80vw', null, '50vw']} size='md' placeholder='Enter a message...' bg={'blackAlpha.400'} boxShadow={'2xl'} isRequired />
                            <Button bg={'whiteAlpha.400'} boxShadow={'dark-lg'} size='lg' m={3} type='submit' >Send</Button>
                        </FormControl>
                    </form>
                    <SimpleGrid fontSize={'xxx-large'} gap={10} columns={3}>
                        <Link href='https://www.linkedin.com/in/charles-tietjen-001/' isExternal><FaLinkedin /></Link>
                        <Link href='https://github.com/charlestietjen' isExternal><FaGithub /></Link>
                        <Link href='https://www.twitch.tv/lowlevelgoblinhours' isExternal><FaTwitch /></Link>
                    </SimpleGrid>
                </Stack>
            </Stack>
        </Box>
    )
}
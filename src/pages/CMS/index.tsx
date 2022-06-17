import { Box, Stack, FormControl, FormLabel, Input, Textarea, IconButton, SimpleGrid, Button, } from '@chakra-ui/react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useState } from 'react'
export const CMS = () => {
    const [formState, setFormState] = useState({ title: '', body: [{ text: '', id: 0 }], image: '' })
    const handleChange = (ev: React.ChangeEvent<HTMLFormElement>) => {
        if (!ev.target.value) return
        if (ev.target.name === 'text'){
            const newBody = formState.body
            newBody[Number(ev.target.id)] = {text: ev.target.value, id: Number(ev.target.id)}
            setFormState({...formState, body: newBody})
            return
        }
        setFormState({ ...formState, [ev.target.name]: ev.target.value })
    }
    const handleAdd = () => {
        const newBodyState = formState.body
        newBodyState.push({text: '', id: formState.body.length})
        setFormState({...formState, body: newBodyState})
    }
    const handleRemove = () => {
        let newBodyState = formState.body
        newBodyState.pop()
        setFormState({...formState, body: newBodyState})
    }
    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        const body = {...formState}
        if (!body) return
        const response = await fetch('/api/blog', 
        { 
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if (response.ok){
            window.location.reload()
        }
    }
    return (
        <Box w={'100vw'}>
            <Stack align='center' overflowY='scroll'>
                <Stack align='center' gap={3} bg='whiteAlpha.800' w={['90vw', null, '55vw']} p={7} borderRadius={'md'} boxShadow={'dark-lg'}>
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input m={3} boxShadow='2xl' bg='blackAlpha.200' name='title' />
                        <FormLabel>Body</FormLabel>
                        {formState.body.map(element => {
                            return <Textarea m={3} name='text' id={`${element.id}`} key={element.id} boxShadow='2xl' bg='blackAlpha.200' />
                        })}
                        <SimpleGrid columns={2}>
                            <IconButton m={3} boxShadow='dark-lg' icon={<FaPlus />} onClick={handleAdd} aria-label={'Add a text input'} />
                            <IconButton m={3} boxShadow='dark-lg' icon={<FaMinus />} onClick={handleRemove} aria-label={'Remove a text input'} />
                        </SimpleGrid>
                        <FormLabel>Image Filename</FormLabel>
                        <Input m={3} boxShadow='2xl' bg='blackAlpha.200' name='image' />
                        <FormLabel>Secret</FormLabel>
                        <Input m={3} boxShadow='2xl' bg='blackAlpha.200' name='secret' />
                        <Button type='submit' m={2}>Blog!</Button>
                    </FormControl>
                    </form>
                </Stack>
            </Stack>
        </Box>
    )
}
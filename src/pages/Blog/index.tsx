import { useEffect, useState } from 'react'
import { Box, Stack } from "@chakra-ui/react"
import { blogs } from "../../lib/blogIndex"
import { BlogEntry } from "../../components/BlogEntry"

export const Blog = () => {
    const [blogsState, setBlogsState] = useState([{ title: '', body: [{text: ''}], createdAt: new Date()}])
    useEffect(() => {
        fetch('/api/blog')
        .then(res => res.json()
        .then(data => {
            setBlogsState(data)}))
        .catch(err => console.log(err))
    },[])
    return (
        <Box h='100vh' overflowY='scroll' scrollSnapType={'y mandatory'}>
            <Stack h='100vh' align='center'>
                {blogsState.map((entry, i) => (
                    <Box mt={10} key={i} scrollSnapAlign='start'>
                        <BlogEntry key={i} entry={entry} />
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}
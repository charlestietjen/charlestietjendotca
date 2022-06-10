import { Box, Stack } from "@chakra-ui/react"
import { blogs } from "../../lib/blogIndex"
import { BlogEntry } from "../../components/BlogEntry"

export const Blog = () => {
    return (
        <Box>
            <Stack scrollSnapType={'y mandatory'} maxH='90vh' pt={10} overflowY={'scroll'} align='center' gap={10}>
                {blogs.map((entry, i) => (
                    <Box key={i} scrollSnapAlign='start'>
                        <BlogEntry key={i} entry={entry} />
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}
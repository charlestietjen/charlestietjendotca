import { Box, Stack } from "@chakra-ui/react"
import { blogs } from "../../lib/blogIndex"
import { BlogEntry } from "../../components/BlogEntry"

export const Blog = () => {
    return (
        <Box m={5}>
            <Stack align='center' gap={5}>
                {blogs.map((entry, i) => (
                    <BlogEntry key={i} entry={entry} />
                ))}
            </Stack>
        </Box>
    )
}
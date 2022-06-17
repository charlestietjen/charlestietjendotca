import { Box, Heading, Container, Text, Stack, Tag, Image } from "@chakra-ui/react"
import dayjs from 'dayjs';

export const BlogEntry = ({ entry }: { entry: { title: string; body: { text: string; }[]; createdAt: Date; image: string; } }) => {
    return (
        <Box w={['90vw', null, '55vw']} bg='whiteAlpha.800' borderRadius={'md'} pt={1} mt={['15vh', null, '10vh']} pb={2} boxShadow={'dark-lg'}>
            <Stack m={5} gap={2}>
                <Heading fontSize={['x-large','xx-large']}>
                    {entry.title}
                </Heading>
                <Tag fontSize={['small','small']} variant='solid' w='fit-content'>{dayjs(entry.createdAt).format('DD MMM YYYY')}</Tag>
                <Container alignSelf='center'>
                    <Stack gap={2}>
                    {entry.body.map(({ text }, i) => (
                        <Box key={i}>
                            <Text textAlign='left' fontSize={['small','medium']}>
                                {text}
                            </Text>
                        </Box>
                    ))}
                    {entry.image ? (<Image alignSelf='center' m='auto' mt={4} maxWidth={['50vw',null,'20vw']} borderRadius={10} boxShadow='dark-lg' src={`../../assets/image/${entry.image}`}/>) : ('')}
                    </Stack>
                </Container>
            </Stack>
        </Box>
    )
}
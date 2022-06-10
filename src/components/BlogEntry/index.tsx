import { Box, Heading, Container, Text, Stack, Tag, Image } from "@chakra-ui/react"
import dayjs from 'dayjs';

export const BlogEntry = ({ entry }: { entry: { title: string; body: { text: string; image?: string; }[]; date: Date; } }) => {
    return (
        <Box width={['80vw', null, '50vw']} bg='whiteAlpha.800' borderRadius={'md'} pt={1} mt={10} pb={2} boxShadow={'dark-lg'}>
            <Stack m={5} gap={2}>
                <Heading fontSize={['x-large','xx-large']}>
                    {entry.title}
                </Heading>
                <Tag fontSize={['small','small']} variant='solid' w='fit-content'>{dayjs(entry.date).format('DD MMM YYYY')}</Tag>
                <Container alignSelf='center'>
                    <Stack gap={2}>
                    {entry.body.map(({ text, image }, i) => (
                        <Box key={i}>
                            <Text textAlign='left' fontSize={['small','medium']}>
                                {text}
                            </Text>
                            {image ? (<Image alignSelf='center' m='auto' mt={4} maxWidth={['50vw',null,'20vw']} borderRadius={10} boxShadow='dark-lg' src={`../../assets/image${image}`}/>) : ('')}
                        </Box>
                    ))}
                    </Stack>
                </Container>
            </Stack>
        </Box>
    )
}
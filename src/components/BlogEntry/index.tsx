import { Box, Heading, Container, Text, Stack, Tag, Image } from "@chakra-ui/react"
import dayjs from 'dayjs';

export const BlogEntry = ({ entry }: { entry: { title: string; body: { text: string; image?: string; }[]; date: Date; } }) => {
    return (
        <Box width={['80vw', null, '50vw']} bg='blackAlpha.500' borderRadius={'md'} boxShadow={'dark-lg'} m={10}>
            <Stack m={5} gap={2}>
                <Heading fontSize={['x-large','xx-large']}>
                    {entry.title}
                </Heading>
                <Tag fontSize={['small','small']} variant='solid' w='fit-content'>{dayjs(entry.date).format('DD MMM YYYY')}</Tag>
                <Container alignSelf='center'>
                    {entry.body.map(({ text, image }, i) => (
                        <Box key={i}>
                            <Text textAlign='left' fontSize={['small','medium']} m={6}>
                                {text}
                            </Text>
                            {image ? (<Image alignSelf='center' boxSize={'sm'} src={`../../assets/image${image}`}/>) : ('')}
                        </Box>
                    ))}
                </Container>
            </Stack>
        </Box>
    )
}
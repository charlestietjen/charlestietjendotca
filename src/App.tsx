import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Stack,
  extendTheme,
  DarkMode,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import { Routes, Route } from "react-router-dom"
import { Blog } from './pages/Blog'
import { Header } from './components/Header'
import { Socials } from './components/Socials'
import { About } from './components/About'
import { Project } from './components/Project'
import { Nav } from "./components/Nav"
import { projects } from "./lib/projects"
import pdf from './assets/pdf/resume.pdf'

const Landing = () => {
  return (
    <Stack maxHeight='80vh' overflowY={'scroll'} scrollSnapType='y mandatory' align={'center'} gap={5}>
      <Box p={40} scrollSnapAlign='center'>
        <About />
      </Box>
      {projects.map((project, i) => (
        <Box p={40} scrollSnapAlign='center' key={i}>
          <Project project={project} />
        </Box>
      ))}
      <Box scrollSnapAlign='start'>
        <Document file={pdf}>
          <Page pageNumber={1} />
          <Page pageNumber={2} />
        </Document>
      </Box>
    </Stack>
  )
}

export const App = () => {
  const theme = extendTheme({
    config: {
      initialColorMode: "light",
    },
    styles: {
      global: {
        body: {
          bg: '#FEFFDB'
        }
      },
    },
    fonts: {
      body: "Noto Sans",
      heading: "Noto Sans",
    }
  })
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          templateAreas={`"socials header"
                  "main main"
                  "footer footer"`}
          gridTemplateRows={'fit-content 1fr'}
          gridTemplateColumns={'23vw 1fr'}
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' bg='#FFC60B' area={'socials'}>
            <Socials />
          </GridItem>
          <GridItem pl='2' bg='#FFC60B' area={'header'}>
            <Header />
          </GridItem>
          <GridItem m={4} pl='2' area={'main'}>
            <Routes>
              <Route path='/blog' element={<Blog />} />
              <Route path='*' element={<Landing />} />
            </Routes>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
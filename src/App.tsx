import * as React from "react"
import './App.css'
import {
  ChakraProvider,
  Box,
  Text,
  Stack,
  extendTheme,
  DarkMode,
  Grid,
  GridItem,
  Center,
  Flex
} from "@chakra-ui/react"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import { Routes, Route } from "react-router-dom"
import { Blog } from './pages/Blog'
import { About } from './pages/About'
import { Work } from "./pages/Work"
import { Contact } from "./pages/Contact"
import { Nav } from "./components/Nav"
import pdf from './assets/pdf/resume.pdf'

const Landing = () => {
  return (
    <Center>
      <Stack gap={10}>
        <About />
      </Stack>
    </Center>
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
          bg: 'linear-gradient(180deg, rgba(55,226,213,1) 23%, rgba(162,87,167,1) 71%)'
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
      <Grid
        templateAreas={[`"content"
                        "nav"`,
                      `nav
                      content`]}
        h='100vh'
        gridTemplateRows={['90% 10%', null, '10% 90%']}
      >
        {/* main */}
        <GridItem w='100%' justifySelf='center' alignSelf='center' area={['content',null,'nav']}>
          <Routes>
            <Route path='/blog' element={<Blog />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<About />} />
          </Routes>
        </GridItem>
        {/* nav */}
        <GridItem area={['nav', null, 'content']}>
          <Nav />
        </GridItem>
      </Grid>
    </ChakraProvider>
  )
}
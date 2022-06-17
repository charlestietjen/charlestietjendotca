import * as React from "react"
import './App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
  ChakraProvider,
  extendTheme,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import { Blog } from './pages/Blog'
import { About } from './pages/About'
import { Work } from "./pages/Work"
import { Contact } from "./pages/Contact"
import { Nav } from "./components/Nav"
import { KitchenGoblin } from "./pages/KitchenGoblin"
import { SpacedOut } from "./pages/SpacedOut"
import { NotDiscord } from "./pages/NotDiscord"
import { CMS } from './pages/CMS'

export const App = () => {
  const [wHeight, setWHeight] = React.useState(window.innerHeight)
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
  React.useEffect(() => {
    function handleResize() {
      setWHeight(window.innerHeight) 
}

    window.addEventListener('resize', handleResize)
  })
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={[`"content"
                        "nav"`,
                      `nav
                      content`]}
        h={wHeight}
        gridTemplateRows={['88% 12%', null, '10% 90%']}
      >
        {/* main */}
        <GridItem w='100%' justifySelf='center' alignSelf='center' area={['content',null,'nav']}>
          <Routes>
            <Route path='/blog' element={<Blog />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/kitchengoblin' element={<KitchenGoblin />} />
            <Route path='/spacedout' element={<SpacedOut />} />
            <Route path='/notdiscord' element={<NotDiscord />} />
            <Route path='/itsbloggintime' element={<CMS />} />
            <Route path="*" element={<About />} />
          </Routes>
        </GridItem>
        {/* nav */}
        <GridItem zIndex={5} area={['nav', null, 'content']}>
          <Nav />
        </GridItem>
      </Grid>
    </ChakraProvider>
  )
}
import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  HStack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
        <HStack justify={"space-between"} m={"2vmax"}>
        <Heading maxH="20vh">Charles Tietjen</Heading>
        <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
    </Box>
  </ChakraProvider>
)

import { Flex, Spacer, Box, Text } from "@chakra-ui/react"
import Searchbar from "./Searchbar"
import ThemeSwitch from "./ThemeSwitch"

function Navbar() {
  return (
    <Flex alignItems="center" padding={4} gap={2}>
      <Box>
        <Text>GameZone</Text>
      </Box>
      <Spacer />
      <Box>
        <Searchbar />
      </Box>
      <Spacer />
      <Box>
        <ThemeSwitch />
      </Box>
    </Flex>
  )
}

export default Navbar

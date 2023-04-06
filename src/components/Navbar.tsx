import { Flex, Box, Text } from "@chakra-ui/react"
import Searchbar from "./Searchbar"
import ThemeSwitch from "./ThemeSwitch"

function Navbar() {
  return (
    <Flex alignItems="center" padding={4} gap={4}>
      <Box>
        <Text>GameZone</Text>
      </Box>
      <Box flex={1}>
        <Searchbar />
      </Box>
      <Box>
        <ThemeSwitch />
      </Box>
    </Flex>
  )
}

export default Navbar

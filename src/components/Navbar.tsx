import { Flex, Spacer, Text, Box } from "@chakra-ui/react"
import Searchbar from "./Searchbar"
import ThemeSwitch from "./ThemeSwitch"

function Navbar() {
  return (
    <Flex>
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

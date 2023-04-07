import { Flex, Box, Text } from "@chakra-ui/react"
import Searchbar from "./Searchbar"
import ThemeSwitch from "./ThemeSwitch"

type NavbarProps = {
  handleSearchSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    text: string
  ) => void
}

function Navbar({ handleSearchSubmit }: NavbarProps) {
  return (
    <Flex alignItems="center" padding={4} gap={4}>
      <Box>
        <Text>GameZone</Text>
      </Box>
      <Box flex={1}>
        <Searchbar handleSearchSubmit={handleSearchSubmit} />
      </Box>
      <Box>
        <ThemeSwitch />
      </Box>
    </Flex>
  )
}

export default Navbar

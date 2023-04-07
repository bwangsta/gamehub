import { Flex, Box, Icon } from "@chakra-ui/react"
import { GiGamepad } from "react-icons/gi"
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
        <Icon as={GiGamepad} boxSize="3em" />
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

import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

function Searchbar() {
  return (
    <InputGroup size={"lg"}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="search"
        placeholder="Search games..."
        borderRadius="full"
        variant="filled"
      />
    </InputGroup>
  )
}

export default Searchbar

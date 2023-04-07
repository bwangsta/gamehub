import { useState } from "react"
import { Input, InputLeftElement, InputGroup, Icon } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"

type SearchbarProps = {
  handleSearchSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    text: string
  ) => void
}

function Searchbar({ handleSearchSubmit }: SearchbarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    handleSearchSubmit(event, searchQuery)
    setSearchQuery("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size={"lg"}>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FaSearch} color="gray.400" />}
        />
        <Input
          type="search"
          placeholder="Search games..."
          borderRadius="full"
          variant="filled"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>
    </form>
  )
}

export default Searchbar

import { useState } from "react"
import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

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
          children={<SearchIcon color="gray.300" />}
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

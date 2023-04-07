import { Grid, GridItem, Flex, Show, Heading } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import PlatformSelector from "./components/PlatformSelector"
import { Genre, Platform, GameQuery, Ordering } from "./types"
import { useState } from "react"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  function handleSelectGenre(genre: Genre) {
    setGameQuery((currGameQuery) => {
      return { ...currGameQuery, genre: genre }
    })
  }

  function handleSelectPlatform(platform: Platform) {
    setGameQuery((currGameQuery) => {
      return { ...currGameQuery, platform: platform }
    })
  }

  function handleSelectOrdering(ordering: Ordering) {
    setGameQuery((currGameQuery) => {
      return { ...currGameQuery, ordering: ordering }
    })
  }

  function handleSearchSubmit(
    event: React.FormEvent<HTMLFormElement>,
    text: string
  ) {
    event.preventDefault()
    setGameQuery((currGameQuery) => {
      return { ...currGameQuery, search: text }
    })
  }

  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      gridTemplateRows="4rem 1fr 3rem"
      minHeight="100dvh"
    >
      <GridItem area="nav" margin="auto 0">
        <Navbar handleSearchSubmit={handleSearchSubmit} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingLeft={8} paddingBlock={8}>
          <Heading fontSize="2xl" marginBottom={4}>
            Genres
          </Heading>
          <GenresList
            selectedGenre={gameQuery.genre}
            handleSelectGenre={handleSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={8}>
        <GameHeading genre={gameQuery.genre} platform={gameQuery.platform} />
        <Flex gap={2} wrap="wrap" marginBlock={4}>
          <SortSelector
            selectedOrdering={gameQuery.ordering}
            handleSelectOrdering={handleSelectOrdering}
          />
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            handleSelectPlatform={handleSelectPlatform}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      <GridItem area="footer">Footer</GridItem>
    </Grid>
  )
}

export default App

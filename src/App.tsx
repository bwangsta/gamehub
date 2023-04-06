import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import PlatformSelector from "./components/PlatformSelector"
import { Genre, Platform, GameQuery } from "./types"
import { useState } from "react"

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
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingLeft={4} paddingBlock={4}>
          <GenresList
            selectedGenre={gameQuery.genre}
            handleSelectGenre={handleSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={4}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          handleSelectPlatform={handleSelectPlatform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      <GridItem area="footer">Footer</GridItem>
    </Grid>
  )
}

export default App

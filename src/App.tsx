import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import PlatformSelector from "./components/PlatformSelector"
import { Genre, Platform } from "./types"
import { useState } from "react"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  )

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
            selectedGenre={selectedGenre}
            handleGenreClick={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={4}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          handlePlatformClick={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
      <GridItem area="footer">Footer</GridItem>
    </Grid>
  )
}

export default App

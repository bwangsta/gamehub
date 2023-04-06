import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
      gridTemplateRows="4rem 1fr 3rem"
      minHeight="100dvh"
    >
      <GridItem area="nav" margin="auto 0">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={4}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
      <GridItem area="footer">Footer</GridItem>
    </Grid>
  )
}

export default App

import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

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
      <GridItem bg="orange.300" area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink.300" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem bg="green.300" area="main">
        Main
      </GridItem>
      <GridItem bg="blue.300" area="footer">
        Footer
      </GridItem>
    </Grid>
  )
}

export default App

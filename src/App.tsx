import { Grid, GridItem, Show } from "@chakra-ui/react"

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
      <GridItem pl="2" bg="orange.300" area="nav">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink.300" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area="main">
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area="footer">
        Footer
      </GridItem>
    </Grid>
  )
}

export default App

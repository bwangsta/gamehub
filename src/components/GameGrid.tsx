import { Text, Grid, GridItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import gamesData from "../data/games.json"

type Game = {
  id: number
  name: string
}

type GamesResponse = {
  count: number
  results: Game[]
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    axios
      .get<GamesResponse>(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
    // setGames(gamesData.results) // TESTING PURPOSES ONLY
  }, [])

  const gamesList = games.map((game) => {
    return (
      <GridItem key={game.id}>
        <Text>{game.name}</Text>
      </GridItem>
    )
  })

  if (error) {
    return <Text>{error}</Text>
  }

  return <Grid gridTemplateColumns="repeat(2, 1fr)">{gamesList}</Grid>
}

export default GameGrid

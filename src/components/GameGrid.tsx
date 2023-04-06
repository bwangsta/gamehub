import { Text, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import GameCard from "./GameCard"
import gamesData from "../data/games.json"

type Game = {
  id: number
  name: string
  background_image: string
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
    // setLoading(true)
    // axios
    //   .get<GamesResponse>(
    //     `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`
    //   )
    //   .then((response) => setGames(response.data.results))
    //   .catch((error) => {
    //     setError(error.message)
    //   })
    //   .finally(() => setLoading(false))
    setGames(gamesData.results) // TESTING PURPOSES ONLY
  }, [])

  const gamesList = games.map((game) => {
    return (
      <GameCard key={game.id} name={game.name} image={game.background_image} />
    )
  })

  if (error) {
    return <Text>{error}</Text>
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing="1rem"
      padding="1rem"
    >
      {gamesList}
    </SimpleGrid>
  )
}

export default GameGrid

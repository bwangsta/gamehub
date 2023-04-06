import { Text, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import GameCard from "./GameCard"
import gamesData from "../data/games.json"
import { Platform } from "../types"
import GameCardSkeleton from "./GameCardSkeleton"

type Game = {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

type GamesResponse = {
  count: number
  results: Game[]
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
      <GameCard
        key={game.id}
        name={game.name}
        image={game.background_image}
        platforms={game.parent_platforms}
        score={game.metacritic}
      />
    )
  })

  if (error) {
    return <Text>{error}</Text>
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={4}
      padding={4}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {gamesList}
    </SimpleGrid>
  )
}

export default GameGrid

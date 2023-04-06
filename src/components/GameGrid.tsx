import { useState } from "react"
import { Text, SimpleGrid } from "@chakra-ui/react"
import GameCard from "./GameCard"
import { Platform, Genre, GameQuery } from "../types"
import GameCardSkeleton from "./GameCardSkeleton"
import useData from "../hooks/useData"
import gamesData from "../data/games.json" // DEVELOPMENT PURPOSES ONLY

type Game = {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  genres: Genre[]
}

type GameGridProps = {
  gameQuery: GameQuery
}

function GameGrid({ gameQuery }: GameGridProps) {
  const { data, isLoading, error } = useData<Game>(
    "games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  )
  const skeletonIds = []
  for (let i = 0; i < 20; i++) {
    skeletonIds.push(i)
  }
  const skeletons = skeletonIds.map((skeleton) => (
    <GameCardSkeleton key={skeleton} />
  ))
  // DEVELOPMENT PURPOSES ONLY
  // const [data, setGames] = useState<Game[]>(gamesData.results)
  // const [isLoading, setLoading] = useState(false)
  // const [error, setError] = useState("")

  const gamesList = data.map((game) => {
    return (
      <GameCard
        key={game.id}
        name={game.name}
        image={game.background_image}
        platforms={game.parent_platforms}
        score={game.metacritic}
        genres={game.genres}
      />
    )
  })

  if (error) {
    return <Text>{error}</Text>
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={4}
      marginTop={4}
    >
      {isLoading ? skeletons : gamesList}
    </SimpleGrid>
  )
}

export default GameGrid

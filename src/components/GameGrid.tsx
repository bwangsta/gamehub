import { Text, SimpleGrid } from "@chakra-ui/react"
import GameCard from "./GameCard"
import { Platform } from "../types"
import GameCardSkeleton from "./GameCardSkeleton"
import useData from "../hooks/useData"
import gamesData from "../data/games.json"

type Game = {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

function GameGrid() {
  // const [games, setGames] = useState<Game[]>(gamesData.results) // TESTING PURPOSES ONLY
  const { data, isLoading, error } = useData<Game>("games")
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const gamesList = data.map((game) => {
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

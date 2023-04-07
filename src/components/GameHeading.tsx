import { Heading } from "@chakra-ui/react"
import { Genre, Platform } from "../types"

type GameHeadingProps = {
  genre: Genre | null
  platform: Platform | null
}

function GameHeading({ genre, platform }: GameHeadingProps) {
  return (
    <Heading as="h1">
      {platform?.name} {genre?.name} Games
    </Heading>
  )
}

export default GameHeading

import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react"
import { Platform, Genre } from "../types"
import PlatformIcons from "./PlatformIcons"
import CriticScore from "./CriticScore"
import GenreTags from "./GenreTags"
import placeholderImage from "../assets/images/placeholder.webp"

type GameCardProps = {
  name: string
  image: string
  platforms: { platform: Platform }[]
  score: number
  genres: Genre[]
}

function GameCard({ name, image, platforms, score, genres }: GameCardProps) {
  return (
    <Card overflow="hidden">
      <Image
        src={image ? image : placeholderImage}
        alt={name}
        height="12.5rem"
        objectFit="cover"
      />
      <CardBody display="flex" flexDirection="column" gap={2} padding={4}>
        <Heading size="md">{name}</Heading>
        <PlatformIcons platforms={platforms} />
        <GenreTags genres={genres} />
        <CriticScore score={score} />
      </CardBody>
    </Card>
  )
}

export default GameCard

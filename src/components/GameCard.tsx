import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react"
import { Platform } from "../types"
import PlatformIcons from "./PlatformIcons"
import CriticScore from "./CriticScore"

type GameCardProps = {
  name: string
  image: string
  platforms: { platform: Platform }[]
  score: number
}

function GameCard({ name, image, platforms, score }: GameCardProps) {
  return (
    <Card overflow="hidden">
      <Image src={image} alt={name} />
      <CardBody>
        <Heading size="md">{name}</Heading>
        <PlatformIcons platforms={platforms} />
        <CriticScore score={score} />
      </CardBody>
    </Card>
  )
}

export default GameCard

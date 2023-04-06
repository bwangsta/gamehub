import { Card, CardBody, Image, Heading } from "@chakra-ui/react"
import { Platform } from "../types"
import PlatformIcons from "./PlatformIcons"

type GameCardProps = {
  name: string
  image: string
  platforms: { platform: Platform }[]
}

function GameCard({ name, image, platforms }: GameCardProps) {
  return (
    <Card overflow="hidden">
      <Image src={image} alt={name} />
      <CardBody>
        <Heading size="md">{name}</Heading>
        <PlatformIcons platforms={platforms} />
      </CardBody>
    </Card>
  )
}

export default GameCard

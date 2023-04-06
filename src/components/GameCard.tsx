import { Card, CardBody, Image, Heading } from "@chakra-ui/react"

type GameCardProps = {
  name: string
  image: string
}

function GameCard({ name, image }: GameCardProps) {
  return (
    <Card overflow="hidden">
      <Image src={image} alt={name} />
      <CardBody>
        <Heading size="md">{name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard

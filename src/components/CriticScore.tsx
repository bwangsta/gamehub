import { Badge, Box } from "@chakra-ui/react"

type CriticScoreProps = {
  score: number
}

function CriticScore({ score }: CriticScoreProps) {
  let color = ""
  if (score >= 80) {
    color = "green"
  } else if (score < 80 && score >= 60) {
    color = "yellow"
  } else {
    color = "red"
  }

  return (
    <Badge colorScheme={color} fontSize={24} borderRadius="md" alignSelf="end">
      {score ? score : "N/A"}
    </Badge>
  )
}

export default CriticScore

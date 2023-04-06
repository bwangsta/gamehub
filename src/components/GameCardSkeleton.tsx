import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

function GameCardSkeleton() {
  return (
    <Card overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton

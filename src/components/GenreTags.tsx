import { Wrap, Tag, WrapItem } from "@chakra-ui/react"
import { Genre } from "../types"

type GenreTagsProps = {
  genres: Genre[]
}

function GenreTags({ genres }: GenreTagsProps) {
  const genreTags = genres.map((genre) => {
    return (
      <WrapItem key={genre.id}>
        <Tag>{genre.name}</Tag>
      </WrapItem>
    )
  })

  return <Wrap flex={1}>{genreTags}</Wrap>
}

export default GenreTags

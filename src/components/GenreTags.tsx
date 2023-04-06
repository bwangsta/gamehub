import { Wrap, Tag, WrapItem } from "@chakra-ui/react"
import { Genre } from "../types"

type GenreTagsProps = {
  genres: Genre[]
}

function GenreTags({ genres }: GenreTagsProps) {
  const genreTags = genres.map((genre) => {
    return (
      <WrapItem>
        <Tag>{genre.name}</Tag>
      </WrapItem>
    )
  })

  return <Wrap>{genreTags}</Wrap>
}

export default GenreTags

import { useState } from "react"
import {
  HStack,
  Text,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react"
import useData from "../hooks/useData"
import { Genre } from "../types"
import genresData from "../data/genres.json" // DEVELOPMENT PURPOSES ONLY

type GenresListProps = {
  handleGenreClick: (genre: Genre) => void
}

function GenresList({ handleGenreClick }: GenresListProps) {
  // const { data, error, isLoading } = useData<Genre>("genres")
  // DEVELOPMENT PURPOSES ONLY
  const [data, setGenres] = useState<Genre[]>(genresData.results)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const genreList = data.map((genre) => {
    return (
      <ListItem key={genre.id} paddingY={2}>
        <HStack>
          <Image src={genre.image_background} boxSize="2rem" />
          <Button
            variant="link"
            fontSize="large"
            onClick={() => handleGenreClick(genre)}
          >
            {genre.name}
          </Button>
        </HStack>
      </ListItem>
    )
  })

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <Text>{error}</Text>
  }

  return <List>{genreList}</List>
}

export default GenresList

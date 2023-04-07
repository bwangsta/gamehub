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
  selectedGenre: Genre | null
  handleSelectGenre: (genre: Genre) => void
}

function GenresList({ selectedGenre, handleSelectGenre }: GenresListProps) {
  // const { data, error, isLoading } = useData<Genre>("genres")
  // DEVELOPMENT PURPOSES ONLY
  const [data, setGenres] = useState<Genre[]>(genresData.results)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const genreList = data.map((genre) => {
    return (
      <ListItem
        key={genre.id}
        borderRadius="md"
        bgColor={genre.id === selectedGenre?.id ? "gray.700" : ""}
        _hover={{ backgroundColor: "gray.700" }}
        fontWeight="bold"
      >
        <Button
          onClick={() => handleSelectGenre(genre)}
          variant="link"
          width="full"
          whiteSpace="normal"
          textAlign="start"
          justifyContent="flex-start"
          padding={2}
          _hover={{ textDecoration: "none" }}
        >
          <HStack>
            <Image src={genre.image_background} boxSize={8} objectFit="cover" />
            <Text
              fontSize="large"
              color={genre.id === selectedGenre?.id ? "gray.200" : ""}
            >
              {genre.name}
            </Text>
          </HStack>
        </Button>
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

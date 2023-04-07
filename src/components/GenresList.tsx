import { useState } from "react"
import {
  HStack,
  Text,
  List,
  ListItem,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"
import { Genre } from "../types"
import genresData from "../data/genres.json"

type GenresListProps = {
  selectedGenre: Genre | null
  handleSelectGenre: (genre: Genre) => void
}

function GenresList({ selectedGenre, handleSelectGenre }: GenresListProps) {
  const [genres] = useState<Genre[]>(genresData.results)

  const bg = useColorModeValue("gray.200", "gray.700")

  const genreList = genres.map((genre) => {
    return (
      <ListItem
        key={genre.id}
        borderRadius="md"
        bgColor={genre.id === selectedGenre?.id ? bg : ""}
        _hover={{ bg }}
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
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </Button>
      </ListItem>
    )
  })

  return <List>{genreList}</List>
}

export default GenresList

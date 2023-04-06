import { HStack, Text, List, ListItem, Image } from "@chakra-ui/react"
import useData from "../hooks/useData"
import genresData from "../data/genres.json"

type Genre = {
  id: number
  name: string
  image_background: string
}

function GenresList() {
  // const [genres, setGenres] = useState<Genre[]>(genresData.results) // TESTING PURPOSES ONLY
  const { data, error } = useData<Genre>("genres")

  const genreList = data.map((genre) => {
    return (
      <ListItem key={genre.id} paddingY={2}>
        <HStack>
          <Image src={genre.image_background} boxSize="2rem" />
          <Text>{genre.name}</Text>
        </HStack>
      </ListItem>
    )
  })

  if (error) {
    return <Text>{error}</Text>
  }

  return <List>{genreList}</List>
}

export default GenresList

import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"
import { Ordering } from "../types"

type SortSelectorProps = {
  selectedOrdering: Ordering | null
  handleSelectOrdering: (ordering: Ordering) => void
}

function SortSelector({
  selectedOrdering,
  handleSelectOrdering,
}: SortSelectorProps) {
  const ordering: Ordering[] = [
    { id: 1, name: "Relevance", slug: "" },
    { id: 2, name: "Name", slug: "name" },
    { id: 3, name: "Release date", slug: "-released" },
    { id: 4, name: "Date added", slug: "-added" },
    { id: 5, name: "Date created", slug: "-created" },
    { id: 6, name: "Last updated", slug: "-updated" },
    { id: 7, name: "Rating", slug: "-rating" },
    { id: 8, name: "Score", slug: "-metacritic" },
  ]

  const orderingItem = ordering.map((order) => {
    return (
      <MenuItem key={order.id} onClick={() => handleSelectOrdering(order)}>
        {order.name}
      </MenuItem>
    )
  })

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown size={12} />}>
        Order by: {selectedOrdering ? selectedOrdering.name : "Relevance"}
      </MenuButton>
      <MenuList>{orderingItem}</MenuList>
    </Menu>
  )
}

export default SortSelector

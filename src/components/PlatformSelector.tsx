import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"
import useData from "../hooks/useData"
import platformsData from "../data/platforms.json"
import { useState } from "react"
import { Platform } from "../types"

function PlatformSelector() {
  // const { data } = useData<Platform>(
  //   "platforms/lists/parents"
  // )
  const [data] = useState(platformsData.results)

  const menuItem = data.map((platform) => {
    return <MenuItem key={platform.id}>{platform.name}</MenuItem>
  })

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown size={12} />}>
        Platforms
      </MenuButton>
      <MenuList>{menuItem}</MenuList>
    </Menu>
  )
}

export default PlatformSelector

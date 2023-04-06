import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"
import useData from "../hooks/useData"
import platformsData from "../data/platforms.json"
import { useState } from "react"
import { Platform } from "../types"

type PlatformSelectorProps = {
  selectedPlatform: Platform | null
  handlePlatformClick: (platform: Platform) => void
}

function PlatformSelector({
  selectedPlatform,
  handlePlatformClick,
}: PlatformSelectorProps) {
  // const { data } = useData<Platform>(
  //   "platforms/lists/parents"
  // )
  const [data] = useState(platformsData.results)

  const menuItem = data.map((platform) => {
    return (
      <MenuItem key={platform.id} onClick={() => handlePlatformClick(platform)}>
        {platform.name}
      </MenuItem>
    )
  })

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown size={12} />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>{menuItem}</MenuList>
    </Menu>
  )
}

export default PlatformSelector

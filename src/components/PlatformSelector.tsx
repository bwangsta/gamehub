import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"
import platformsData from "../data/platforms.json"
import { useState } from "react"
import { Platform } from "../types"

type PlatformSelectorProps = {
  selectedPlatform: Platform | null
  handleSelectPlatform: (platform: Platform) => void
}

function PlatformSelector({
  selectedPlatform,
  handleSelectPlatform,
}: PlatformSelectorProps) {
  const [platforms] = useState(platformsData.results)

  const menuItem = platforms.map((platform) => {
    return (
      <MenuItem
        key={platform.id}
        onClick={() => handleSelectPlatform(platform)}
      >
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

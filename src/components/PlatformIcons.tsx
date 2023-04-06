import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa"
import { BsNintendoSwitch, BsAndroid2, BsGlobe } from "react-icons/bs"
import { MdPhoneIphone } from "react-icons/md"
import { IconType } from "react-icons"
import { Icon, HStack } from "@chakra-ui/react"
import { Platform } from "../types"

type PlatformIconsProps = {
  platforms: { platform: Platform }[]
}

function PlatformIcons({ platforms }: PlatformIconsProps) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: BsNintendoSwitch,
    android: BsAndroid2,
    web: BsGlobe,
  }

  const platformIcons = platforms.map(({ platform }) => {
    return (
      <Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500" />
    )
  })

  return <HStack marginY={2}>{platformIcons}</HStack>
}

export default PlatformIcons

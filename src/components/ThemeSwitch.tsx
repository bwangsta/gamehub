import {
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  Icon,
} from "@chakra-ui/react"
import { BsSun, BsMoon } from "react-icons/bs"

function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <FormControl alignItems="center" display="flex" gap={2}>
      <FormLabel
        htmlFor="toggle-theme"
        aria-label="Toggle Theme"
        hidden
      ></FormLabel>
      <Icon as={BsSun} boxSize="1.25em" />
      <Switch
        id="toggle-theme"
        size="lg"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Icon as={BsMoon} boxSize="1.25em" />
    </FormControl>
  )
}

export default ThemeSwitch

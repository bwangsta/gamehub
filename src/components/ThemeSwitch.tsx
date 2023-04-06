import { Switch, FormControl, FormLabel, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <FormControl>
      <FormLabel
        htmlFor="toggle-theme"
        aria-label="Toggle Theme"
        hidden
      ></FormLabel>
      <SunIcon />
      <Switch
        id="toggle-theme"
        marginInline={1}
        size="lg"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <MoonIcon />
    </FormControl>
  )
}

export default ThemeSwitch

import { Switch, FormControl, FormLabel, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <FormControl display="flex" alignItems="center" gap="0.5rem">
      <FormLabel htmlFor="toggle-theme" aria-label="Toggle Theme"></FormLabel>
      <SunIcon />
      <Switch
        id="toggle-theme"
        size="lg"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <MoonIcon />
    </FormControl>
  )
}

export default ThemeSwitch

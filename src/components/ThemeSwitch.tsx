import { Switch, FormControl, FormLabel } from "@chakra-ui/react"

function ThemeSwitch() {
  return (
    <FormControl display="flex">
      <Switch id="toggle-theme" size="lg" />
      <FormLabel htmlFor="toggle-theme">Dark Mode</FormLabel>
    </FormControl>
  )
}

export default ThemeSwitch

import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle-theme"
      colorScheme={useColorModeValue("purple", "orange")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      m={3}
      onClick={toggleColorMode}
    ></IconButton>
  );
}

export default ThemeToggleButton;

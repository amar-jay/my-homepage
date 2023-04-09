import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

type ThemeModeTogglerProps = Omit<IconButtonProps, "aria-label">;

const ThemeToggleButton: React.FC<ThemeModeTogglerProps> = (props) => {
  const { toggleColorMode, ...x } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const res = JSON.stringify(useColorMode());

  return (
    <IconButton
      aria-label="toggle-button"
      fontSize="1xl"
      variant="ghost"
      onClick={() => {
          console.log(res);
        toggleColorMode();
      }}
      icon={<SwitchIcon />}
      padding={3}
      borderColor={"whiteAlpha.500"}
      borderWidth={1}
      m={3}
      color={"white"}
      _hover={{
        opacity: 1,
      }}
      backgroundColor={useColorModeValue("primary", "orange.500")}
      _active={{ bg: "transparent" }}
      style={{ boxShadow: "none" }}
      {...props}
    />
  );
};

export default ThemeToggleButton;

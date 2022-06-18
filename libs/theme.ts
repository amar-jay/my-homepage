import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 28,
        textUnderlineOffset: "#525252",
        textDecorationThickness: 6,
        marginTop: 3,
        marginBottom: 4,
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: mode("#3d7aed", "#ff63c3")(props),
        textUnderlineOffset: 3,
      }),
    },
  },
};

const fonts = {
  heading: "'Tahoma'",
};

const colors = {
  azure: "#f0ffff",
  voilet: "#6a0dab80",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;

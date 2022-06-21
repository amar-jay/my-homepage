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
        textUnderlineOffset: [0, 7],
        textDecorationColor: "#9c27b0",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  BodyLink: {
    marginTop: 3,
    marginBottom: 4,
    backgroundColor: "purple.500",
  },
  Link: {
    variant: {
      "stack-link": {
        textDecoration: "none",
        ":hover": {
          textDecoration: "none",
        },
      },
    },
  },
};

const fonts = {
  heading: "'Nova Mono', 'Tahoma', monospace",
};

const colors = {
  primary: "#9c27b0",
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

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#f0e7db", "#2C3333")(props),
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
        textDecorationColor: "#395B64",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      "card-title": {
        fontSize: 24,
        marginLeft: 4,
        marginY: 3,
        color: "#395B64",
        ":hover": {
          color: "#A5C9CA",
        },
      },
    },
  },
  BodyLink: {
    marginTop: 3,
    marginBottom: 4,
    backgroundColor: "#395B64",
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
  primary: "#A5C9CA",
  voilet: "#E7F6F2",
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

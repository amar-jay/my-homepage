import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#f0e7db", colors.bgDark)(props),
    },
  }),
};


export const colors = {
  primary: "#A5C9CA",
  voilet: "#E7F6F2",
  bgDark: "#2C3333",
};

const components = {
  Heading: {
    variants: {
      "section-title": {
//       textDecoration: "underline",
//        textDecorationColor: "#395B64",
//        textUnderlineOffset: [0, 7],
        textDecorationThickness: 4,
        fontSize: 28,
        color: mode(colors.voilet, colors.primary), //"#35793A",
        marginTop: 3,
        marginBottom: 4,
      },
      "card-title": {
        fontSize: 24,
        marginLeft: 4,
        marginY: 3,
        opacity: .8,
        color: colors.primary,//"#395B64",
        ":hover": {
          opacity: 1,
//          color: "#35393A",
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

const config = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;

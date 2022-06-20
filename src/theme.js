import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      linkDefault: { default: "blue.500", _dark: "purple.500" },
      linkHover: { default: "blue.800", _dark: "purple.800" },
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  }
});


export default theme;
import React, { Component } from 'react';
import { Box, ChakraProvider, Code, Grid, Link, Text, theme, VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Logo } from '../../Logo';


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: "1"
    }
  }

  render() {
    return  <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test Page
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>

  }

}


export default Test;
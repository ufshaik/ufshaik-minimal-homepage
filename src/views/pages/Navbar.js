import React, { Component } from 'react';
import { VStack, Box, Container, Link, Heading } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: 'Umar Shaik',
    };
  }

  render() {
    return (
      <VStack
        spacing={4}
        align='stretch'
      >
        <Box h='40px'>
          <Container>
            <Heading as={'h3'}>
              {this.props.name}
            </Heading>
          </Container>
        </Box>
        <Box h='40px'>
          <Container>
            <Link _hover={{ color: 'gray.700' }} color={'gray.600'} pr={5} as={ReachLink} to={'/'}> Home </Link>
            <Link _hover={{ color: 'gray.700' }} color={'gray.600'} pr={5} as={ReachLink} to={'/goose'}> Goose </Link>
            <Link _hover={{ color: 'gray.700' }} color={'gray.600'} pr={5} as={ReachLink} to={'/posts'}> Posts </Link>
          </Container>
        </Box>
      </VStack>
    );
  }

}


export default Navbar;
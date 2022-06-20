import React, { Component } from 'react';
import { VStack, Box, Link, Heading} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: 'Umar Shaik',
    };

  }


  decorateTextForLink = (name, route) => {
    // Logics for active state and
    let colorRanges = {
      default : 'linkDefault',
      hover : 'linkHover'
    }

     const { def, hov } = (this.props.location.pathname === route) ? { def: colorRanges.hover,
       hov: colorRanges.default} : { def: colorRanges.default,
       hov: colorRanges.hover};

    return(
      <Link _hover={{ color: hov }} color={def}
             pr={5} as={ReachLink} fontWeight={600} _activeLink={true}
             to={route}>
          {name}
      </Link>

    )

  }

  render() {
    return (
      <VStack
        spacing={4}
        align='stretch'
      >
        <Box h='40px'>
            <Heading as={'h3'}>
              {this.props.name}
            </Heading>
        </Box>
        <Box h='40px'>
            {this.decorateTextForLink('Home', '/')}
            {this.decorateTextForLink('Goose', '/goose')}
            {this.decorateTextForLink('Posts', '/posts')}
        </Box>
      </VStack>
    );
  }

}


export default Navbar;
import React, { Component } from 'react';
import { VStack } from '@chakra-ui/react';
import { Section, SubSection } from '../components/Section';
import { LinkIconBar } from '../components/LinkIconBar';


class Goose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Goldengoose207',
    };
  }

  render() {
    return (
      <>
        <LinkIconBar />
        <VStack
          spacing={4}
          align='stretch'
          ml={[10, 20, 200]}
          mt={[10, 20, 50]}
        >

          <Section name={this.state.name} />
          {/*<SubSection />*/}

        </VStack>


      </>
    );


  }

}


export default Goose;
import React, { Component } from 'react';
import { VStack } from '@chakra-ui/react';
import { Section, SubSection } from '../components/Section';
import { LinkIconBar } from '../components/LinkIconBar';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Umar Shaik',
    };
  }

  render() {
    return (
      <>
        <LinkIconBar />
        <VStack
          spacing={4}
          align='stretch'
          ml={[10, 20, 200, 400]}
          mt={[10, 20, 50, 70]}
        >

          <Section name={this.state.name} />
          {/*<SubSection />*/}

        </VStack>


      </>
    );
  }

}


export default Home;
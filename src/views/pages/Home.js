import React, { Component } from 'react';
import { VStack, Text, Center, Container } from '@chakra-ui/react';
import { Section, SubSection } from '../components/Section';
import { LinkIconBar } from '../components/LinkIconBar';
import Emoji from '../components/Emoji';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Umar Shaik',
      isTablet: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isTablet: window.innerWidth > 900 });
  }

  title = "About"

  content = () =>{
    return <>
      <Text>
      Hey !
      </Text>
      <Text mt={3}>
        I am a Sr Software Developer currently working at SkillsHawk (Creatros Technologies).
      </Text>
      <Text mt={3}>
        Currently working on skill extraction using NLP and enhancing serverless cloud architecture.
      </Text>
      <Text mt={3}>
        I also teach kids and adult Immigrants on the weekends at Association for New Canadians and also work at Get Coding as an Instructor.
      </Text>
      <Text mt={3}>
        Previously I’ve worked for Metricsflow as a Software Developer, ex-mod at XDA.
      </Text>
      <Text mt={3}>
        From India <Emoji symbol={"🇮🇳"} label={"Indian Flag"}/>,
        Detour in Qatar <Emoji symbol={"🇶🇦"} label={"Qatar Flag"}/>,
        Chilling in Canada <Emoji symbol={"🇨🇦"} label={"Qatar Flag"}/>
      </Text>
      <Text mt={3}>
        PS: I don’t bite, connect with me if you are working on some cool projects or just wanna chat
      </Text>
    </>
  }

  mainContent = () =>{
    return <VStack
      spacing={4}
      align='stretch'
      // ml={[5, 5, 200, 400]}
      mr={[5, 5, 5, 5]}
      mt={[10, 20, 50, 70]}
    >

      <Section name={this.state.name} {...this.props }/>
      <SubSection title={this.title} content={this.content()}/>

    </VStack>
  }

  render() {
    return (
      <>
        <LinkIconBar />
        {this.state.isTablet ? <Center> {this.mainContent()}  </Center> : <Container> {this.mainContent()} </Container>}

      </>
    );
  }

}


export default Home;
import React, { Component } from 'react';
import {
  VStack, Text, Spacer, Heading, Badge,
  Link, Box, Tag, TagLabel, Center, Container,
} from '@chakra-ui/react';
import { Section, SubSection } from '../components/Section';
import { LinkIconBar } from '../components/LinkIconBar';
import { ExternalLinkIcon } from '@chakra-ui/icons';


class Posts extends Component {
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

  title = "Banter"

  content = () =>{
    return <>
      <Text>
        You seem very interested in this website
      </Text>
      <Text mt={3}>
        Alright, let me throw in some cool stuff
      </Text>
      <Text mt={6}>
        Just showcasing some projects I’ve worked in the past, checkout my github or gitlab account for more.
      </Text>
    </>
  }

  titleProjects = "Projects"

  contentProjects = () =>{
    return <>
      <Box>
      <Heading as='h3' size='lg'>
        Predictive Networks, Illusions and Schizophrenia
      </Heading>
      <Tag size='lg' colorScheme='red' borderRadius='full'>
        <TagLabel>Super Cool Project</TagLabel>
      </Tag>
      <Text mt={3}>
        Creating a simulation of how people with Schizophrenia perceive illusions.
      </Text>
      <Text mt={3}>
        <Badge colorScheme={'messenger'}> Dev Comments: </Badge> Ever wanted to fool AI, well I did, checkout the reports and presentation
      </Text>
      <Text mt={3}>
        <Link isExternal href="https://ufshaik.github.io/PIS/"
        title="PIS Website">
         Visit the Website<ExternalLinkIcon mx='2px' />
        </Link>
        <Link ml={2} isExternal href="https://github.com/ufshaik/PIS"
              title="Project Github">
          Visit the Source <ExternalLinkIcon mx='2px' />
        </Link>
      </Text>
      </Box>
      <Box mt={6}>
        <Heading as='h3' size='lg'>
          Timeline Baloons
        </Heading>
        <Tag size='lg' colorScheme='red' borderRadius='full'>
          <TagLabel>Super Cool Project</TagLabel>
        </Tag>
        <Text mt={3}>
          Although I made it in school, its a very different way of
          looking at gantt charts as balloons in a 2d scale.
        </Text>
        <Text mt={3}>
          <Badge colorScheme={'messenger'}> Dev Comments: </Badge> I wish more people could use it, I thought everyone liked balloons
        </Text>
        <Text mt={3}>
          <Link isExternal href="https://github.com/ufshaik/TimelineBaloons"
                title="Project Github">
            Visit the Source <ExternalLinkIcon mx='2px' />
          </Link>
        </Text>
      </Box>
      <Box mt={6}>
        <Heading as='h3' size='lg'>
          Mushroom Invaders
        </Heading>
        <Tag size='lg' colorScheme='red' borderRadius='full'>
          <TagLabel>Super Cool Project</TagLabel>
        </Tag>
        <Text mt={3}>
          Wanted to make a game in Lua and hence comes Mushroom Invaders,
          does not use any libraries, just plain code by me
        </Text>
        <Text mt={3}>
          <Badge colorScheme={'messenger'}> Dev Comments: </Badge> Some people would say the ninja has a bug, but its a feature
        </Text>
        <Text mt={3}>
          <Link isExternal href="https://gitlab.com/ufshaik/mushroom-invaders"
                title="Project Github">
            Visit the Source <ExternalLinkIcon mx='2px' />
          </Link>
        </Text>
      </Box>
    </>
  }


  mainContent = () =>{
    return  <VStack
      spacing={4}
      align='stretch'
      // ml={[10, 20, 200, 400]}
      mt={[10, 20, 50, 70]}
    >

      <Section name={this.state.name} {...this.props }/>
      <SubSection title={this.title} content={this.content()}/>
      <SubSection title={this.titleProjects} content={this.contentProjects()}/>
      <Spacer/>
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


export default Posts;
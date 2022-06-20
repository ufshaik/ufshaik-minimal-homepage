import React, { Component } from 'react';
import { VStack, Text, Image, Box, Stack, Link, Center, Container, Spacer } from '@chakra-ui/react';
import { Section, SubSection } from '../components/Section';
import { LinkIconBar } from '../components/LinkIconBar';
import { ExternalLinkIcon } from '@chakra-ui/icons'




class Goose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Goldengoose207',
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
        Quack Quack !
      </Text>
      <Text mt={3}>
        Been a gamer ever since I’ve been introduced to the wonderful world of gaming through {' '}
        <Link isExternal href="https://classicreload.com/dangerous-dave.html"
        title="Dangerous Dave">
         Dave <ExternalLinkIcon mx='2px' />
      </Link>
      </Text>
      <Text mt={3}>
        <Stack direction='row'>
          <Text mt={3}>
          Recent Achievement :
          </Text>
          <Image src='/Icons/platinum.png' alt='Platinum Trophy' boxSize='10' />
          <Text mt={3}>
            Trophy in Elden Ring on
          </Text>
          <Image src='/Icons/playstation.png' alt='Playstation' boxSize='10' />
        </Stack>

      </Text>
      <Text mt={3}>
        PS: I play halo and valorant occasionally, add me on discord
      </Text>
    </>
  }

  titleGamerTag = "Tag"

  contentGamerTag = () =>{

    return (
      <Image src={"https://card.exophase.com/2/0/86882.png?1655138162"} alt={"Exophase gamer tag"}
        />
    )
  }

  titleCredit = "Credit"

  contentCredit = () => {
    return(
      <Box>
        <Text>
        <Link  href="https://www.flaticon.com/free-icons/playstation-move"
              title="playstation move icons" isExternal>
          Playstation move icons created by Freepik - Flaticon <ExternalLinkIcon mx='2px' />
        </Link>
        </Text>
        <Text>
        <Link isExternal href="https://www.flaticon.com/free-icons/platinum"
              title="platinum icons">
          Platinum icons created by bearicons - Flaticon <ExternalLinkIcon mx='2px' />
        </Link>
        </Text>
      </Box>
        )

  }

  mainContent = () =>{
    return <VStack
      spacing={4}
      align='stretch'
      // ml={[10, 20, 200, 400]}
      mt={[10, 20, 50, 70]}
    >

      <Section name={this.state.name} {...this.props }/>
      <SubSection title={this.title} content={this.content()}/>
      <SubSection title={this.titleGamerTag} content={this.contentGamerTag()}/>
      <SubSection title={this.titleCredit} content={this.contentCredit()}/>
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


export default Goose;
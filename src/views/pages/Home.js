import React, { useState, useEffect } from 'react';
import { VStack, Text, Center, Container, Spacer, useMediaQuery } from '@chakra-ui/react';
import { Section, SubSection } from '../components/Section';
import { LinkIconBar } from '../components/LinkIconBar';
import Emoji from '../components/Emoji';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const title = "About"

const content = () =>{
  return <>
    <Text>
      Hey !
    </Text>
    <Text mt={3}>
      I am a Sr Software Developer at <Link href='https://www.dependbuild.com' isExternal>
      dependbuild <ExternalLinkIcon mx='2px' />
    </Link>
    </Text>
    <Text mt={3}>
      Currently working on Information Retrieval and Risk Assessment using Dense Retrieval and Prediction while also setting up / enhancing our core product using serverless cloud architecture on AWS.
    </Text>
    <Text mt={3}>
      I also teach kids and adult immigrants Coding and Digital Literacy at Association for New Canadians.
    </Text>
    <Text mt={3}>
      Previously I worked on skill extraction using NLP and enhancing serverless cloud architecture for SkillsHawk, Coach at Get Coding, Software Developer at Metricsflow, Mod Developer at XDA.
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

const mainContent = ({name, props}) =>{
  return <VStack
    spacing={4}
    align='stretch'
    // ml={[5, 5, 200, 400]}
    mr={[5, 5, 5, 5]}
    mt={[10, 20, 50, 70]}
  >

    <Section name={name} {...props}/>
    <SubSection title={title} content={content()}/>
    <Spacer/>

  </VStack>
}

const Home = (props) =>{
  const [name] = useState("Umar Shaik");
  const [isTablet] = useMediaQuery('(min-width: 950px)')

  useEffect( () =>{
    document.title = "Home | Umar Shaik"
  })

  return isTablet ? <> <LinkIconBar /> <Center> {mainContent({ name: name, props: props })}  </Center> </> : <>
    <LinkIconBar /> <Container> {mainContent({
    name: name,
    props: props,
  })} </Container> </>

}

export default Home;
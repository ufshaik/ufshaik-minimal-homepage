import { Avatar, Box, HStack, SkeletonCircle, Heading, Center} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../pages/Navbar';


const nameProfileSwitcher = {
  'Umar Shaik' : '/Avatars/Umar.jpg',
  'Goldengoose207' : '/Avatars/Goose.jpg'
}

const configs = {
  spacing: 70
}

const Section = (props) => {
  let {name} = props;
  let url = nameProfileSwitcher[name];
  return (
    <Box>
      <HStack spacing={configs.spacing}>
        <Box w='100px' h='100px' >
          <Avatar size={'xl'} src={url} icon={<SkeletonCircle size='100' />}/>
        </Box>
        <Box w='400px' h='100px'>
          <Navbar name={name} {...props}/>
        </Box>
      </HStack>
    </Box>
  );
};


const SubSection = ({title, content}) => {
  return (
    <Box pt={10}>
      <HStack spacing={configs.spacing}>
        <Center w='100px'>
          <Heading as='h4' size='md'>
            {title}
          </Heading>
        </Center>
        <Box w='800px' fontSize={'lg'}  align={"left"}>
          {content}
        </Box>
      </HStack>
    </Box>
  );

};


export {
  Section, SubSection,
};
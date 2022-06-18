import { Avatar, Box, HStack, SkeletonCircle } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../pages/Navbar';


const nameProfileSwitcher = {
  'Umar Shaik' : 'https://drive.google.com/uc?export=view&id=1_gtwFmfpDaFKKYy7vDzj4j1AlOXpscp9',
  'Goldengoose207' : 'https://drive.google.com/uc?export=view&id=1xOwjT49uIKOgNciSDcv5B34K2BVbpUO1'
}

const Section = (props) => {
  let {name} = props;
  let url = nameProfileSwitcher[name];
  return (
    <Box>
      <HStack spacing='24px'>
        <Box w='100px' h='100px' >
          <Avatar size={'xl'} src={url} icon={<SkeletonCircle size='100' />}/>
        </Box>

        <Box w='400px' h='100px'>
          <Navbar name={name}/>
        </Box>
      </HStack>
    </Box>
  );
};


const SubSection = () => {
  return (
    <Box>
      <HStack spacing='24px'>
        <Box w='100px' h='100px' bg='yellow.200'>
          1
        </Box>
        <Box w='400px' h='100px' bg='tomato'>
          2
        </Box>
      </HStack>
    </Box>
  );

};


export {
  Section, SubSection,
};
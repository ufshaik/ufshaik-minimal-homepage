import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Container, Box, VStack } from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaMoon, FaSteam, FaSun } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

// Takes care of the Icons grid
export const LinkIconBar = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const links = {
    github: 'https://github.com/ufshaik',
    discord: 'https://discord.com/users/goldengoose207#2870',
    steam: 'https://steamcommunity.com/id/Goldengoose207',
    email: 'mailto: ufshaikc@gmail.com'
  }

  return (
    <Box mt={10}>
    <VStack>
      <Container >
        <IconButton
          size="md"
          fontSize="4xl"
          aria-label={`follow on mail`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={() => {
            window.open(links.email, "_blank");
          }}
          icon={<BiMailSend />}
          {...props}
        />
        <IconButton
          size="md"
          fontSize="3xl"
          aria-label={`follow on discord`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={() => {
            window.open(links.discord, "_blank");
          }}
          icon={<FaDiscord />}
          {...props}
        />
        <IconButton
          size="md"
          fontSize="3xl"
          aria-label={`follow on steam`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={() => {
            window.open(links.steam, "_blank");
          }}
          icon={<FaSteam />}
          {...props}
        />
        <IconButton
          size="md"
          fontSize="3xl"
          aria-label={`follow on github`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={() => {
            window.open(links.github, "_blank");
          }}
          icon={<FaGithub />}
          {...props}
        />
        <IconButton
          size="md"
          fontSize="3xl"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
          {...props}
        />
      </Container>
    </VStack>
    </Box>


  );
};

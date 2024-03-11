import { Box, Flex, Image, Text, Grid } from '@chakra-ui/react';
import React from 'react';
import TypingAnimation from './Typinganimation';
import profileimage from "../Sources/final_profile.jpg";

const Home = () => {
  return (
    <Grid 
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} // Adjusting template columns for responsiveness
      gap={6} 
      paddingTop={"100px"}
      id='home'
      
    >
      {/* Grid item for image */}
      <Box margin={"auto"}>
        <Image src={profileimage} alt='Dan Abramov' height={"400px"} borderRadius={"50%"} className='home-img'/>
      </Box>
      {/* Grid item for text */}
      <Box height={"400px"} textAlign={"center"}>
        <Flex height="100%" alignItems="center" justifyContent="center" flexDirection="column">
          <Text fontSize={"3rem"} fontWeight={"600"} id='user-detail-name'>Hi I'm, Vishnuraj K R</Text>
          <TypingAnimation />
        </Flex>
      </Box>
    </Grid>
  );
};

export default Home;

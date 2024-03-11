import { EmailIcon, PhoneIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { Box, Grid, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';

const Contact = () => {
  return (
    <Box textAlign={"center"} width={"70%"} margin={"auto"} marginBottom={"50px"} id='contact'>
      <Text padding={"30px"} fontSize={["1.5rem", "2rem"]} fontWeight={"600"} textDecoration={"underline"}>Contact Me</Text>
      <Grid 
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} 
        gap={"20px"}
      >
        <Box 
          backgroundColor={"#bfc3c9"} 
          padding={"20px"} 
          borderRadius={"5px"} 
          _hover={{ backgroundColor: "#aebcd4" }} // Hover effect
        >
          <PhoneIcon /> 
          <Text mt={2} id='contact-phone'>+91 9207510075</Text>
        </Box>
        <Box 
          backgroundColor={"#bfc3c9"}  
          padding={"20px"} 
          borderRadius={"5px"} 
          _hover={{ backgroundColor: "#aebcd4" }} // Hover effect
        >
          <EmailIcon /> 
          <Text mt={2} id='contact-email'>vishnurajkarockal@gmail.com</Text>
        </Box>
        <Box 
          backgroundColor={"#bfc3c9"} 
          padding={"20px"} 
          borderRadius={"5px"} 
          _hover={{ backgroundColor: "#aebcd4" }} // Hover effect
        >
          <TriangleDownIcon /> 
          <Text mt={2}>Ramapuram, Kerala</Text>
        </Box>
      </Grid>
      {/* Social buttons */}
      <Box gridTemplateColumns={"repeat(3,afr)"} width={"40%"} margin={"auto"} marginTop={"50px"} display={"flex"} justifyContent={"space-between"}>
        <Button variant="unstyled" as="a" href="https://www.linkedin.com/in/vishnuraj-karockal/" target="_blank">
          <Image src={`https://img.icons8.com/fluency/48/linkedin.png`} id='contact-linkedin' />
        </Button>
        <Button variant="unstyled" as="a" href="https://github.com/VishnurajKarockal" target="_blank" >
          <Image src={`https://img.icons8.com/ios-filled/50/github.png`} id='contact-github'/>
        </Button>
        <Button variant="unstyled" as="a" href="https://www.facebook.com/vishnuraj.kr.925/" target="_blank">
          <Image src={`https://img.icons8.com/color/48/facebook-new.png`} />
        </Button>
        <Button variant="unstyled" as="a" href="https://www.instagram.com/_.kaarockan._/" target="_blank">
          <Image src={`https://img.icons8.com/fluency/48/instagram-new.png`} />
        </Button>
        <Button variant="unstyled" as="a" href="https://twitter.com/" target="_blank">
          <Image src={`https://img.icons8.com/color/48/twitter--v1.png`} />
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;

import { Box, Grid, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Skills = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box py={10} px={4} width={"70%"} margin={"auto"} id='skills'>
      <Text textAlign={"center"} padding={"20px"} marginBottom={"30px"} fontSize={["1.5rem", "2rem"]} fontWeight={"600"} textDecoration={"underline"}>Technical Skills</Text>
      <Grid templateColumns={{
          base: 'repeat(2, 1fr)',      
          sm: 'repeat(4, 1fr)',         
          md: 'repeat(6, 1fr)',         
          lg: 'repeat(6, 1fr)',         
          xl: 'repeat(6, 1fr)',         
        }} gap={4}>
        {skills.map(skill => (
          <SkillCard key={skill.name} name={skill.name} image={skill.image} borderColor={borderColor} />
        ))}
      </Grid>
    </Box>
  );
};

const SkillCard = ({ name, image, borderColor }) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
      boxShadow="md"
      overflow="hidden"
      textAlign="center"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'rotate(360deg)' }}
      height="0"
      paddingTop="100%"
      position="relative"
    >
      <Box position="absolute" top="0" left="0" bottom="0" right="0" display="flex" justifyContent="center" alignItems="center">
        <Image src={image} alt={name} />
      </Box>
      <Text
        fontWeight="bold"
        fontSize="sm"
        bottom={2}
        left={0}
        right={0}
        bg="#969493"
        color="white"
        p={2}
        opacity={1} // Set opacity to 1 by default
        transition="opacity 0.2s ease-in-out"
        position="absolute"
        width="100%"
        textAlign="center"
        zIndex="1" // Ensure the text is above the image
      >
        {name}
      </Text>
    </Box>
  );
};



const skills = [
  { name: 'HTML', image: 'https://img.icons8.com/color/48/html-5--v1.png' },
  { name: 'CSS', image: 'https://img.icons8.com/color/48/css3.png' },
  { name: 'JavaScript', image: 'https://img.icons8.com/color/48/javascript--v1.png' },
  { name: 'Java', image: 'https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png' },
  { name: 'React', image: 'https://img.icons8.com/plasticine/100/react.png' },
  { name: 'Redux', image: 'https://img.icons8.com/ios/50/redux.png' },
  { name: 'Chakra UI', image: 'https://img.icons8.com/color/48/chakra-ui.png' },
  { name: 'Bootstrap', image: 'https://img.icons8.com/ios/50/bootstrap.png' },
  { name: 'Tailwind CSS', image: 'https://img.icons8.com/color/48/tailwind_css.png' },
  { name: 'SQL', image: 'https://img.icons8.com/dotty/80/sql.png' },
  { name: 'MongoDB', image: 'https://img.icons8.com/nolan/64/mongo-db.png' },
  { name: 'TypeScript', image: 'https://img.icons8.com/ios/50/typescript.png' },
  { name: 'Rest APIs', image: 'https://img.icons8.com/ios-filled/50/api-settings.png' },
  { name: 'SASS', image: 'https://img.icons8.com/color/48/sass.png' },
  { name: 'Git', image: 'https://img.icons8.com/ios-filled/50/git.png' },
  
  // Add more skills as needed
];

export default Skills;

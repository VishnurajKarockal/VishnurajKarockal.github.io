import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const SkillCard = ({ name, image, borderColor }) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
      boxShadow="md"
      position="relative"
      overflow="hidden"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'rotate(360deg)' }}
      className='skills-card'
    >
      <Image src={image} alt={name} mb={2} className='skills-card-img'/>
      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize="sm"
        position="absolute"
        bottom={2}
        left={0}
        right={0}
        bg="rgba(0, 0, 0, 0.6)"
        color="white"
        p={2}
        opacity={0}
        transition="opacity 0.2s ease-in-out"
        className='skills-card-name'
      >
        {name}
      </Text>
    </Box>
  );
};

export default SkillCard;

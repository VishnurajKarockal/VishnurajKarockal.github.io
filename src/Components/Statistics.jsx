import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Statistics = () => {
    return (
        <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            width="70%" 
            padding="20px" 
            margin="auto" 
            paddingTop="100px" 
            textAlign="center" 
            _hover={{ backgroundColor: "#aebcd4" }}
            id='statistics'
        >
            <Text 
                fontSize={{ base: "1.2rem", md: "2rem" }} // Responsive font size
                fontWeight="bold" 
                marginBottom="30px"
            >
                GitHub Contributions Graph
            </Text>
            <Image src={`https://ghchart.rshah.org/VishnurajKarockal`} margin="auto" width="90%" className='react-activity-calendar'/>
            <Button 
                as="a" 
                href='https://github.com/VishnurajKarockal' 
                bg={"#c6c8cc"} 
                marginTop="20px" 
                fontSize={{ base: "0.8rem", md: "1rem" }} // Responsive font size
            >
                Explore My GitHub
            </Button>
        </Box>
    );
};

export default Statistics;

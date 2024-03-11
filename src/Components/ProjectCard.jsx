import { Box, Image, Button, Stack, Heading, Text } from '@chakra-ui/react';

// Project Card Component
export const ProjectCard = ({ imageSrc, title, description, githubLink, liveLink, stackImages }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            width="70%"
            padding={"20px"}
            margin={"auto"}
            marginTop={"30px"}
            backgroundColor="white"
            transition="background-color 0.3s ease"
            _hover={{ backgroundColor: "#b0b3b8" }}
            className='project-card'
        >
            {/* Upper Portion with Image */}
            <Box>
                {/* Image */}
                <Image src={imageSrc} borderRadius={"10px"} className='project-title'/>
            </Box>
            {/* Second Grid */}
            <Box p={6}>
                {/* Title */}
                <Heading 
                    as="h2" 
                    size="md" 
                    textAlign={"center"} 
                    fontSize={{ base: "1.2rem", md: "2rem" }} // Responsive font size
                    textDecoration={"underline"}
                >
                    {title}
                </Heading>
                {/* Description */}
                <Text mt={4} fontSize={{ base: "0.8rem", md: "1rem" }} className='project-description'>{description}</Text> {/* Responsive font size */}
                {/* Stack Images */}
                <Stack direction="row" spacing={2} mt={4} className='project-tech-stack'>
                    {stackImages.map((image, index) => (
                        <Image key={index} src={image} alt={`${title} Stack`} boxSize="30px" />
                    ))}
                </Stack>
                {/* Buttons to Navigate */}
                <Stack direction="row" spacing={4} justify="center" mt={4}>
                    <Button 
                        colorScheme="blue" 
                        as="a" 
                        href={githubLink} 
                        target="_blank"
                        fontSize={{ base: "0.8rem", md: "1rem" }} // Responsive font size
                        className='project-github-link'
                    >
                        GitHub Repo
                    </Button>
                    <Button 
                        colorScheme="green" 
                        as="a" 
                        href={liveLink} 
                        target="_blank"
                        fontSize={{ base: "0.8rem", md: "1rem" }} // Responsive font size
                        className='project-deployed-link'
                    >
                        Live Link
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { ProjectCard } from "./ProjectCard";
import  blistrobliss  from "../Sources/Blistro_Bliss_HomePage.png";
import samrathospital from "../Sources/Hospital_Project_HomePage.jpg";
const Projects = () => {
  return (
    <Box id='projects'>
    <Text textAlign={"center"} padding={"20px"} fontSize={["1.5rem", "2rem"]} fontWeight={"600"} textDecoration={"underline"} paddingTop={"80px"}>Projects</Text>
    <ProjectCard
                imageSrc={samrathospital}
                title="Samrat Hospital"
                description="Welcome to Samrat Hospital! We are dedicated to delivering unparalleled healthcare services with a compassionate touch. Our state-of-the-art facility combines cutting-edge medical technology with a commitment to patient well-being. At Samrat Hospital, we believe in healing not just the body, but also the spirit."
                githubLink="https://github.com/geeteshmehuria/Samrat-Hospital-Clone"
                liveLink="https://c-sharp-sam.vercel.app/"
                stackImages={["https://img.icons8.com/color/48/html-5--v1.png", "https://img.icons8.com/color/48/css3.png", "https://img.icons8.com/color/48/chakra-ui.png","https://img.icons8.com/plasticine/100/react.png","https://img.icons8.com/ios/50/redux.png"]}
            />
            {/* Project 2 Card */}
            <ProjectCard
                imageSrc={blistrobliss}
                title="The BilstroBliss"
                description="About
                BistroBliss, website is dedicated to serve as an easy and outstanding platform for users , to book and filter through all the high quality resorts available online . it let folks filter and book a hotel room depending on there requirements"
                githubLink="https://github.com/shraddha-gawde/The-bistroBliss"
                liveLink="https://neural-innovator-5123-lqyf.vercel.app/"
                stackImages={["https://img.icons8.com/color/48/html-5--v1.png", "https://img.icons8.com/color/48/css3.png", "https://img.icons8.com/color/48/javascript--v1.png","https://img.icons8.com/ios/50/bootstrap.png","https://img.icons8.com/color/48/tailwind_css.png","https://img.icons8.com/color/48/sass.png","https://img.icons8.com/ios-filled/50/api-settings.png"]}
            />
    </Box>
  )
}

export default Projects
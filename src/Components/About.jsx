// import { Box, Button, Text } from '@chakra-ui/react';
// import React from 'react';

// const About = () => {
//   const handleDownloadResume = () => {
//     // Assuming your resume file is named 'resume.pdf'
//     const resumeUrl = '.\Sources\VishnurajKR-FullStackWebDeveloper-Rvbd.pdf';
//     const link = document.createElement('a');
//     link.href = resumeUrl;
//     link.download = 'resume.pdf';
//     link.target = '_blank'; // Open in a new tab
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <Box textAlign={"center"} marginTop={"100px"}>
//       <Text fontSize={"2rem"} fontWeight={"600"} marginBottom={"30px"}>About Me</Text>
//       <Text fontSize={"1.1rem"} width={"70%"} margin={"auto"} >Dynamic full-stack web developer with a robust skill set in HTML, CSS, React.js, Chakra-UI, Bootstrap, MongoDB, SQL, Java, and JavaScript. Proven expertise in collaborative projects, demonstrating adaptability, and a commitment to delivering high-quality, scalable solutions. Ready to contribute technical excellence to elevate web development initiatives.</Text>
//       <Button marginTop={"30px"} as="a" href=".\Sources\VishnurajKR-FullStackWebDeveloper-Rvbd.pdf" target="_blank">Resume</Button>
//     </Box>
//   );
// };

// export default About;

import { DownloadIcon } from '@chakra-ui/icons';
import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
    <Box textAlign={"center"} paddingTop={"100px"} id='about' className='about section'>
      <Text fontSize={["1.5rem", "2rem"]} fontWeight={"600"} marginBottom={"30px"} textDecoration={"underline"}>
        About Me
      </Text>
      <Text fontSize={[".8rem", "1.1rem"]} width={"70%"} margin={"auto"} id='user-detail-intro'>
        Dynamic full-stack web developer with a robust skill set in HTML, CSS, React.js, Chakra-UI, Bootstrap, MongoDB, SQL, Java, and JavaScript. Proven expertise in collaborative projects, demonstrating adaptability, and a commitment to delivering high-quality, scalable solutions. Ready to contribute technical excellence to elevate web development initiatives.
      </Text>
      <Button marginTop={"30px"} as="a" href=".\Sources\VishnurajKR-FullStackWebDeveloper-Rvbd.pdf" target="_blank" id='resume-button-2'>
        <DownloadIcon /> Resume
      </Button>
    </Box>
  );
};

export default About;


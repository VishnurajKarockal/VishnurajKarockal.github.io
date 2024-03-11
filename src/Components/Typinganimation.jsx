// import React from 'react';
// import Typist from 'react-typist';

// const TypingAnimation = () => {
//   return (
//     <div style={{fontSize:"1.5rem"}}>
//       <Typist cursor={{ show: false }} loop>
//         <span>Full Stack Web Developer!</span>
//         <Typist.Backspace count={30} delay={1000} />
//         <span>MERN Stack Web Developer!</span>
//         <Typist.Delay ms={1000} />
//       </Typist>
//     </div>
//   );
// };

// export default TypingAnimation;


import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState("Full Stack Web Developer!");

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => prevText === "Full Stack Web Developer!" ? "MERN Stack Web Developer!" : "Full Stack Web Developer!");
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div style={{fontSize:"1.5rem"}}>
      {text}
    </div>
  );
};

export default TypingAnimation;

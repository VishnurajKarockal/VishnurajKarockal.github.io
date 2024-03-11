import { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
} from "@chakra-ui/react";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Flex
        p={4}
        alignItems="center"
        bg="#969693"
        color="white"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
      >
        <Box fontSize="1.5rem" fontWeight={"600"}>Vishnuraj K R</Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }} fontSize={"1.2rem"} id="nav-menu">
          <Link href="#home" style={{ padding: "20px" }} onClick={() => scrollToSection("home")} className="nav-link home">
            Home
          </Link>
          <Link href="#about" style={{ padding: "20px" }} onClick={() => scrollToSection("about")} className="nav-link about">
            About
          </Link>
          <Link href="#skills" style={{ padding: "20px" }} onClick={() => scrollToSection("skills")} className="nav-link skills">
            Skills
          </Link>
          <Link href="#projects" style={{ padding: "20px" }} onClick={() => scrollToSection("projects")} className="nav-link projects">
            Projects
          </Link>
          <Link href="#statistics" style={{ padding: "20px" }} onClick={() => scrollToSection("statistics")} >
            Statistics
          </Link>
          <Link href="#contact" style={{ padding: "20px" }} onClick={() => scrollToSection("contact")} className="nav-link contact">
            Contact
          </Link>
          <Button
            bg="#cccbc8"
            variant="solid"
            as="a"
            href=".\Sources\VishnurajKR-FullStackWebDeveloper-Rvbd.pdf"
            download
            className="nav-link resume"
            id="resume-button-1"
          >
            <DownloadIcon />
            Resume
          </Button>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            onClick={toggleDrawer}
          />
        </Box>
        <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Vishnuraj K R</DrawerHeader>
              <DrawerBody>
                <List spacing={3}>
                  <ListItem>
                    <Link href="#home" onClick={() => { scrollToSection("home"); toggleDrawer(); }}>
                      Home
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#about" onClick={() => { scrollToSection("about"); toggleDrawer(); }}>
                      About
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#skills" onClick={() => { scrollToSection("skills"); toggleDrawer(); }}>
                      Skills
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#projects" onClick={() => { scrollToSection("projects"); toggleDrawer(); }}>
                      Projects
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#statistics" onClick={() => { scrollToSection("statistics"); toggleDrawer(); }}>
                      Statistics
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#contact" onClick={() => { scrollToSection("contact"); toggleDrawer(); }}>
                      Contact
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Button mt={4} colorScheme="teal" variant="solid" download>
                      Download Resume
                    </Button>
                  </ListItem>
                </List>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
      <Box pt="70px"></Box>
    </>
  );
};

export default Navbar;

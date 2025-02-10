import Slide from "./Pages/Slide/index";
import AboutMe from "./Pages/AboutMe/index";
import ContactMe from "./Pages/ContactMe/index";
import MyProjects from "./Pages/MyProjects/index";
import MySkills from "./Pages/MySkills/index";
import Navbar from "./Components/Navbar/index";
import Footer from "./Components/Footer/index";
import React from "react";
import { Box, Stack } from "@mui/material";

export default function App() {
  return (
    <Stack>
      <Navbar/>
        <Slide />
      <Box sx={{ p:"0px 10%"  , display:"flex" , flexDirection:"column" , alignItems:"center" }}>
        <AboutMe />
        <MySkills />
        <MyProjects />
        <ContactMe />
      </Box>
      <Footer />
    </Stack>
  );
}

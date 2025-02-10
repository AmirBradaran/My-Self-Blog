import React from "react";
import { AppBar, Toolbar, Typography, Box, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background:"linear-gradient(-170deg, var(--fifth-color), var(--third-color))",
        boxShadow:"-4px 2.5px 8px 0px whitesmoke",
        color: "white",
        width: "85%",
        translate: "10% 0",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <Toolbar sx={{display:"flex" , justifyContent:"space-between" , position:"relative"}}>
        <img src='../../Gust.jpg' style={{width:"50px" , border:"none" , borderRadius:"100%"}}/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 , position:"absolute" , zIndex:-1 , left:"5px" , color:"black" }}>
          امیر برادران
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
            صفحه اصلی
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
            درباره من
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
            راه های ارتباطی
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
            مهارت ها
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
            نمونه کار ها
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

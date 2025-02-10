import React, { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  IconButton, 
  Drawer,
  List,
  ListItem,
  useMediaQuery
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery('(max-width:700px)');

  const menuItems = [
    { title: "درباره من" },
    { title: "راه های ارتباطی" },
    { title: "مهارت ها" }
  ];

  const MobileMenu = () => (
    <Drawer
      anchor="left"
      open={openMenu}
      onClose={() => setOpenMenu(false)}
      sx={{ 
        '& .MuiDrawer-paper': { 
          width: 250,
          background: 'linear-gradient(-170deg, var(--first-color), var(--third-color))',
          color: 'white'
        }
      }}
    >
      <List sx={{ textAlign: 'right', pt: 4 }}>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.title}
            onClick={() => setOpenMenu(false)}
            sx={{
              justifyContent: 'flex-end',
              '&:hover': {
                background: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            <Typography variant="h6">{item.title}</Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(-170deg, var(--first-color) 50%, var(--third-color))",
        boxShadow: "-4px 2.5px 8px 0px whitesmoke",
        color: "white",
        width: "85%",
        translate: "10% 0",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <Toolbar sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        position: "relative",
        padding: { xs: '0 8px', sm: '0 16px' }
      }}>
        <img 
          src='/Gust.jpg' 
          style={{ 
            width: "50px", 
            border: "none", 
            borderRadius: "100%",
            marginLeft: isMobile ? 0 : '16px',
            boxShadow:"2px 2px 10px whitesmoke"
          }} 
          alt="profile"
        />
        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItems.map((item) => (
              <Typography 
                key={item.title}
                variant="h6" 
                sx={{ 
                  fontWeight: "bolder",
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.8
                  }
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Box>
        ) : (
          <IconButton
            color="inherit"
            onClick={() => setOpenMenu(true)}
            sx={{ padding: 0 }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}

        <MobileMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
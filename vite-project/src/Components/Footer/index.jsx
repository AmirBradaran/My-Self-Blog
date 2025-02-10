import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { BsInstagram, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        py: 3,
        textAlign: "center",
        mt: 5,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          با من در ارتباط باشید
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Link
            href="https://instagram.com/codemashad"
            target="_blank"
            underline="none"
          >
            <IconButton
              sx={{
                color: "#E4405F",
                transition: "transform 0.3s ease, color 0.3s ease",
                "&:hover": { color: "#fff", transform: "scale(1.2)" },
              }}
            >
              <BsInstagram size={28} />
            </IconButton>
          </Link>
          <Link href="https://t.me/Codemashad" target="_blank" underline="none">
            <IconButton
              sx={{
                color: "#0088cc",
                transition: "transform 0.3s ease, color 0.3s ease",
                "&:hover": { color: "#fff", transform: "scale(1.2)" },
              }}
            >
              <BsTelegram size={28} />
            </IconButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

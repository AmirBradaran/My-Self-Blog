import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";

const SlideContainer = styled(Box)(({ theme }) => ({
  minHeight: "86vh",
  display: "flex",
  padding: theme.spacing(4),
  direction: "rtl",
  position: "relative",
  backgroundImage: "url('/Space.png')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  zIndex:-1
}));

const ContentBox = styled(Box)(({ theme }) => ({
  textAlign: "right",
  position: "absolute",
  right:"5%",
  top:"40%",
  display:"flex",
  flexDirection:"column",
  flexWrap:"wrap",
  zIndex: 1,
  color: theme.palette.common.white,
  background: "rgba(20, 20, 20, 0.5)",
  padding: theme.spacing(3),
  borderRadius: "10px",
}));

const PersianSlide = () => {
  return (
    <SlideContainer>
      <Container maxWidth="md">
        <ContentBox>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: "2.5rem",
              mb: 4,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            امیرمحمد
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: "1.8rem",
              mb: 3,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            برادران حسینی
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 2,
              maxWidth: "80%",
              mx: "auto",
              textAlign: "justify",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            دانشجو رشته مهندسی کامپیوتر ، Front-end Developer{" "}
          </Typography>
        </ContentBox>
      </Container>
    </SlideContainer>
  );
};

export default PersianSlide;

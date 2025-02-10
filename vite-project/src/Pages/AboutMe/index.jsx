import React from "react";
import { Box, Grid, Typography, Button, styled } from "@mui/material";

const AboutMeContainer = styled(Box)(({ theme }) => ({
  direction: "rtl",
  padding: theme.spacing(4),
  backgroundColor: "#1a1a1a",
  color: "#fff",
  borderRadius: "16px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  marginTop: "20px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ff0055",
  color: "#fff",
  marginTop: theme.spacing(3),
  padding: "10px 20px",
  borderRadius: "8px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#e6004c",
  },
}));

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ flexDirection: "row-reverse" }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bolder", color: "#ff0055" }}
          >
            درباره من
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 2, textAlign: "justify", marginBottom: "20px" , fontWeight:"bold" }}
          >
            با سلام امیر برادران هستم در رشته مهندسی
            کامپیوتر فعالیت میکنم و در حال حاضر طراح سایت هم هستم .
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 2, textAlign: "justify" }}
          >
            با یک سال سابقه کار در زمینه طراحی کاربری خوب و طراحی سایت خوب
            میتوانم به شما کمک کنم .
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/As.jpg"
            alt="About Me"
            sx={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Grid>
      </Grid>
    </AboutMeContainer>
  );
};

export default AboutMe;

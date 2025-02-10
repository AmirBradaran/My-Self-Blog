import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  LinearProgress,
  styled,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";

const SkillContainer = styled(Container)(({ theme }) => ({
  direction: "rtl",
  padding: theme.spacing(4),
  textAlign: "right",
}));

const SkillItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  width: "100%",
}));

const SkillBar = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 4,
  backgroundColor: "#e0e0e0",
  "& .MuiLinearProgress-bar": {
    borderRadius: 4,
    background: "linear-gradient(45deg, #cd6d0e84 30%, #A68768 100%)",
  },
}));
const skills = [
  { name: "UI / UX", value: 90 },
  { name: "HTML 5", value: 100 },
  { name: "CSS", value: 95 },
  { name: "JAVASCRIPT", value: 85 },
  { name: "React.js", value: 90 },
  { name: "زبان انگلیسی", value: 70 },
];

const MySkills = () => {
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const timeouts = skills.map((skill, index) =>
      setTimeout(() => {
        setAnimatedValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = skill.value;
          return newValues;
        });
      }, index * 300)
    );

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <SkillContainer
      maxWidth="md"
      sx={{ background: "#1a1a1a", margin: "5% 0", borderRadius: 5 }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{ fontWeight: 700, color: "#ff0055" }}
      >
        مهارت ها
      </Typography>

      <Typography
        variant="h5"
        gutterBottom
        sx={{ mb: 4, color: "#A68768", fontWeight: "bold" }}
      >
        بخشی از توانایی های من
      </Typography>

      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} md={6} key={index}>
            <SkillItem>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 500, color: "white", fontWeight: "bolder" }}
                >
                  {skill.name}
                </Typography>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Typography variant="body1" sx={{ color: "#CDD4DA" }}>
                    {animatedValues[index]}%
                  </Typography>
                </motion.div>
              </Box>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              >
                <SkillBar
                  variant="determinate"
                  value={animatedValues[index]}
                  sx={{ direction: "ltr" }}
                />
              </motion.div>
            </SkillItem>
          </Grid>
        ))}
      </Grid>
    </SkillContainer>
  );
};

export default MySkills;

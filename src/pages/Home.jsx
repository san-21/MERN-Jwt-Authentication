import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundColor: `${theme.palette.background[200]}`,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 4,
        }}
      >
        Mern Stack Authentication with JWT.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
        }}
      >
        Industry Standart Best PRACTICE
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: `${theme.palette.text[800]}`,
        }}
      >
        Highly Secured Authentication Project!!!
      </Typography>
    </Box>
  );
};

export default Home;

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { instance } from "../services/axiosClient";
const Profile = () => {
  const location = useLocation();

  const theme = useTheme();
  const [err, setError] = useState(null);
  const user = useSelector((state) => state.auth);

  const profile = async () => {
    try {
      const response = await instance.get("/user/profile");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  useEffect(() => {
    profile();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundColor: `${theme.palette.background[200]}`,
        textAlign: "center",
        p: { xs: "auto", sm: 1, md: 2 },
      }}
    >
      <Typography variant="h4">Your Profile </Typography>

      <Typography color="inherit" variant="h6">
        {user.fullname}
      </Typography>
    </Box>
  );
};

export default Profile;

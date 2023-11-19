import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";

import { instance } from "../services/axiosClient";
const Dashboard = () => {
  const theme = useTheme();
  const [data, setData] = useState("");

  const dashboard = async () => {
    try {
      const res = await instance.get("/user/dashboard");
      const data = await res.data;

      setData(data.message);
    } catch (error) {
      console.log("i am dashboard componnent 403 error from server");
    }
  };
  useEffect(() => {
    dashboard();
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
      {data ? <Typography variant="h4">{data}</Typography> : <LinearProgress />}
    </Box>
  );
};

export default Dashboard;

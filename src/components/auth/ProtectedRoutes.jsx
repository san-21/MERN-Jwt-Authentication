import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  if (!user.token) {
    navigate("/");
  }
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default ProtectedRoutes;

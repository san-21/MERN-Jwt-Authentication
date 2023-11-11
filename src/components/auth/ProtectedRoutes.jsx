import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginOpen } from "../../redux-state/auth/authModal";

import { logout } from "../../redux-state/auth/authReducer";
const ProtectedRoutes = () => {
  const userAuthenticated = useSelector(
    (state) => state.authenticated.userAuthenticated
  );
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userAuthenticated && !user.token) {
      navigate("/");
    }
  }, [userAuthenticated]);

  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default ProtectedRoutes;

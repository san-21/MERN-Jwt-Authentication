import { Box, Button, CircularProgress, Container } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";

import SignUp from "../components/auth/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { setSignupOpen, setLoginOpen } from "../redux-state/auth/authModal";
import LogIn from "../components/auth/LogIn";
import { Outlet } from "react-router-dom";
import { logout } from "../redux-state/auth/authReducer";
import { useNavigate, useLocation } from "react-router-dom";
import { instance } from "../services/axiosClient";
import { setUserUnAuthenticated } from "../redux-state/auth/auththenticateReducer";
const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const isUrlDashboard = pathname === "/dashboard";
  const isUrlProfile = pathname === "/profile";

  // const isUrlHome = pathname === "/";
  console.log(pathname);
  const theme = useTheme();
  const user = useSelector((state) => state.auth);
  const userAuthenticated = useSelector(
    (state) => state.authenticated.userAuthenticated
  );
  const [signoutLoading, setSignoutLoading] = useState(false);

  const dispatch = useDispatch();
  const handleSignout = async () => {
    setSignoutLoading(true);

    try {
      const result = await instance.post("/auth/logout");
      dispatch(logout());
      dispatch(setUserUnAuthenticated());
      console.log(result);

      setSignoutLoading(false);

      navigate("/", { replace: true });
    } catch (error) {
      setSignoutLoading(false);
    }
  };
  const handleLoginOpen = () => {
    dispatch(setLoginOpen());
  };
  const handleSignupOpen = () => {
    dispatch(setSignupOpen());
  };
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: `${theme.palette.background[500]}`,
          p: 2,
          pl: 4,
          pr: 4,
          mb: 4,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Button onClick={() => navigate("/")}>MERN-JWT</Button>
        </Box>
        {userAuthenticated && !isUrlProfile && (
          <Button
            onClick={() => navigate("/profile")}
            sx={{
              textTransform: "capitalize",
              fontSize: "13px",
            }}
          >
            Profile
          </Button>
        )}
        {userAuthenticated && !isUrlDashboard && (
          <Button
            onClick={() => navigate("/dashboard")}
            sx={{
              textTransform: "capitalize",
              fontSize: "13px",
            }}
          >
            dashboard
          </Button>
        )}
        {!userAuthenticated && (
          <Button
            onClick={handleLoginOpen}
            sx={{
              textTransform: "capitalize",
              fontSize: "13px",
            }}
          >
            Log In
          </Button>
        )}

        <Button
          onClick={!userAuthenticated ? handleSignupOpen : handleSignout}
          variant="contained"
          sx={{
            backgroundColor: `${theme.palette.primary[500]}`,
            color: `${theme.palette.text[500]}`,
            width: "120px",
            height: "35px",

            textTransform: "capitalize",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          {!userAuthenticated && !signoutLoading && "Join Now"}
          {userAuthenticated && !signoutLoading && "Sign Out"}
          {signoutLoading && (
            <CircularProgress
              size={30}
              sx={{
                color: `${theme.palette.background[500]}`,
              }}
            />
          )}
        </Button>

        <span
          style={{
            margin: "0 10px",
            fontSize: "14px !important",
            fontWeight: 700,
            color: `${theme.palette.text[400]}`,
          }}
        >
          {userAuthenticated && user.fullname}
        </span>
      </Box>
      <Outlet />
      <SignUp />
      <LogIn />
    </Container>
  );
};

export default Layout;

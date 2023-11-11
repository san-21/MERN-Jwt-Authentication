import { createSlice } from "@reduxjs/toolkit";

const authModalSlice = createSlice({
  name: "authModal",
  initialState: {
    signupOpen: false,
    loginOpen: false,
  },
  reducers: {
    setSignupClose: (state) => {
      state.signupOpen = false;
    },
    setSignupOpen: (state) => {
      state.signupOpen = true;
    },
    setLoginClose: (state) => {
      state.loginOpen = false;
    },
    setLoginOpen: (state) => {
      state.loginOpen = true;
    },
  },
});

export const { setLoginClose, setLoginOpen, setSignupClose, setSignupOpen } =
  authModalSlice.actions;

const authModalReducer = authModalSlice.reducer;
export default authModalReducer;

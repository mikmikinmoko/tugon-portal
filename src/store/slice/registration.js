import { createSlice } from "@reduxjs/toolkit";

import { message } from "antd";
const initialState = {
  isLoading: false,
  registerSuccess: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    signupCitizen(state) {
      state.isLoading = true;
      state.registerError = null;
      state.recentRegistered = null;
    },
    signupCitizenSuccess(state, action) {
      state.isLoading = false;
      state.registerSuccess = true;
      state.recentRegistered = action.payload.data.data;
      message.success(action.payload.data.message);
    },
    requestError(state, action) {
      state.recentRegistered = null;
      state.isLoading = false;
      state.registerSuccess = false;
      message.warning(action.payload.data.message);
    },
  },
});

export default registrationSlice;

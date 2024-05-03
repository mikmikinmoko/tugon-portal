import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const initialState = {
  isLoading: false,
  isAuthenticated: false,
  currentUser: null,
  token: null,
  changePassModal: false,
  changePassLoading: false,
  mode: "login",
  otpToken: null,
  validOTP: false,
  recoveryEmail: null,
  signUpLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupCitizen(state) {
      state.signUpLoading = true;
    },
    signupCitizenSuccess(state) {
      state.signUpLoading = false;
    },
    setMode(state, { payload }) {
      state.mode = payload;
    },
    login(state) {
      state.isLoading = true;
    },
    traceLogin(state) {
      state.isLoading = true;
    },
    logout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.token = null;
      state.isLoading = false;
    },
    authenticate(state, action) {
      state.currentUser = action.payload.data;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.changePassModal = action.payload.isDefaultPass;
    },
    dismissChangePassModal(state) {
      state.changePassModal = false;
    },
    changePass(state) {
      state.changePassLoading = true;
    },
    changePassSuccess(state, { payload }) {
      state.changePassLoading = false;
      state.changePassModal = false;
      message.success(payload.message);
    },
    loginError(state, action) {
      state.isAuthenticated = false;
      message.warning(action.payload.data.message);
      state.isLoading = false;
      state.changePassLoading = false;
    },
    sendOtp(state) {
      state.otpToken = null;
      state.isLoading = true;
      state.validOTP = false;
      state.recoveryEmail = null;
    },
    sendOtpSuccess(state, action) {
      message.success("One time password is sent to your email.");
      state.otpToken = action.payload?.token;
      state.validOTP = false;
      state.recoveryEmail = null;
      state.isLoading = false;
    },
    submitOtp(state) {
      state.isLoading = true;
      state.validOTP = false;
      state.recoveryEmail = null;
    },
    submitOtpFail(state, action) {
      message.warning(action.payload?.data?.message);
      state.isLoading = false;
      state.validOTP = false;
      state.recoveryEmail = null;
    },
    submitOtpSuccess(state, action) {
      message.success("One time password valid");
      state.isLoading = false;
      state.validOTP = true;
      state.recoveryEmail = action.payload?.email;
    },
    changePassword(state) {
      state.isLoading = true;
    },
    changePasswordFail(state) {
      state.isLoading = false;
    },
    changePasswordSuccess(state, action) {
      state.otpToken = null;
      message.success(action.payload?.message);
      state.mode = "login";
      state.isLoading = false;
      state.validOTP = false;
      state.recoveryEmail = null;
    },
    requestError(state, action) {
      message.warning(action.payload.data.message);
      state.isLoading = false;
      state.changePassLoading = false;
    },
  },
});

export default authSlice;

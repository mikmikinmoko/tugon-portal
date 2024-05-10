import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
const initialState = {
  seniorLoading: false,
};

const seniorSlice = createSlice({
  name: "senior",
  initialState,
  reducers: {
    createSeniorId(state) {
      state.seniorLoading = true;
    },
    createSeniorIdSuccess(state) {
      state.seniorLoading = false;
    },

    requestError(state, action) {
      message.warning(action.payload.data.message);
      state.seniorLoading = false;
      state.changePassLoading = false;
    },
  },
});

export default seniorSlice;

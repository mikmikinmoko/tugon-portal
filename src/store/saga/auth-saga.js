import { put, call, takeLatest } from "redux-saga/effects";
import { authActions } from "../../store/store";
import {
  login,
  // brgyLogin,
  changePasswordWithToken,
  sendOtp,
  submitOtp,
  changePassword,
} from "../api/auth-api";
///
///

function* loginRequest({ payload }) {
  const { authenticate, loginError } = authActions;
  const body = payload;
  const result = yield call(login, body);
  if (result.name === "AxiosError") {
    yield put(loginError(result.response));
  } else {
    yield put(authenticate(result.data));
    // console.log(result.data)
  }
}

function* changePassRequest({ payload }) {
  const { changePassSuccess, requestError } = authActions;

  const result = yield call(changePasswordWithToken, payload);
  if (result.name === "AxiosError") {
    yield put(requestError(result.response));
  } else {
    yield put(changePassSuccess(result.data));
  }
}

function* sendOtpRequest({ payload }) {
  const { sendOtpSuccess, loginError } = authActions;

  const result = yield call(sendOtp, payload);
  if (result.name === "AxiosError") {
    yield put(loginError(result.response));
  } else {
    yield put(sendOtpSuccess(result.data));
  }
}

function* submitOtpRequest({ payload }) {
  const { submitOtpSuccess, submitOtpFail } = authActions;

  const result = yield call(submitOtp, payload);
  if (result.name === "AxiosError") {
    yield put(submitOtpFail(result.response));
  } else {
    yield put(submitOtpSuccess(result.data));
  }
}

function* changePasswordRequest({ payload }) {
  const { changePasswordSuccess, changePasswordFail } = authActions;

  const result = yield call(changePassword, payload);
  if (result.name === "AxiosError") {
    yield put(changePasswordFail(result.response));
  } else {
    yield put(changePasswordSuccess(result.data));
  }
}

// Export the saga (todo-saga)
export default function* authSaga() {
  yield takeLatest(`auth/login`, loginRequest);
  yield takeLatest(`auth/changePass`, changePassRequest);
  yield takeLatest(`auth/sendOtp`, sendOtpRequest);
  yield takeLatest(`auth/submitOtp`, submitOtpRequest);
  yield takeLatest(`auth/changePassword`, changePasswordRequest);
}

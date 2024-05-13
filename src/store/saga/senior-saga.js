import { put, call, takeLatest } from "redux-saga/effects";
import { seniorActions } from "../../store/store";
import { createSeniorId } from "../api/senior-api";
import { message } from "antd";
///
///

function* createSeniorIdRequest({ payload }) {
  const { createSeniorIdSuccess, requestError } = seniorActions;

  const result = yield call(createSeniorId, payload);
  console.log(result);
  if (result?.name === "AxiosError") {
    message.error(result?.data?.message);
    yield put(requestError(result?.response));
  } else {
    message.success(result?.data?.message);
    yield put(createSeniorIdSuccess(result?.data));
    if (payload.cb) yield call(payload.cb);
  }
}

// Export the saga (todo-saga)
export default function* seniorSaga() {
  yield takeLatest(`senior/createSeniorId`, createSeniorIdRequest);
}

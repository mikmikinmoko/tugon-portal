import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "../store/slice/auth-slice";
import seniorSlice from "../store/slice/senior-slice";

import authSaga from "../store/saga/auth-saga";
import seniorSaga from "../store/saga/senior-saga";

const rootPersistConfig = {
  key: "root-dgs",
  version: 1,
  storage,
  whitelist: [],
};
const authPersistConfig = {
  key: "auth-dgs",
  version: 1,
  storage,
  blacklist: ["isLoading", "changePassLoading"],
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice.reducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: persistedReducer,
  middleware: [saga],
});

saga.run(authSaga);
saga.run(seniorSaga);

export const authActions = authSlice.actions;
export const seniorActions = seniorSlice.actions;

export const persistor = persistStore(store);
export default store;

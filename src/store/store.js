import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./slices/auth-slice";

import authSaga from "./sagas/auth-saga";

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

export const authActions = authSlice.actions;

export const persistor = persistStore(store);
export default store;

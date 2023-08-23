import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import blogReduser from "../features/blogSlice";
const authPersistConfig = {
  key: "auth",
  storage,
};
const blogPersistConfig = {
  key: "blog",
  storage,
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  blog: persistReducer(blogPersistConfig, blogReduser),
});
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export const persistor = persistStore(store);
export default store;
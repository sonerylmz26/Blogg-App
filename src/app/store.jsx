import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import blogReduser from "../features/blogSlice"

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer)



const store = configureStore({
  reducer: {
    auth: persistedReducer,
    blog: blogReduser,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store)
export default store;

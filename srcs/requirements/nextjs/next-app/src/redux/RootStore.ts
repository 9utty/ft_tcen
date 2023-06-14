import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { FriendApi } from "./Api/Friend";
import { ProfileApi } from "./Api/Profile";
import { rootReducer } from "./RootReducer";

const store = configureStore({
  reducer: {
    ...rootReducer,
    [ProfileApi.reducerPath]: ProfileApi.reducer,
    [FriendApi.reducerPath]: FriendApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProfileApi.middleware, FriendApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

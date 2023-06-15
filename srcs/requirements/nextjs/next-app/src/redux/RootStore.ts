import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AuthApi } from "./Api/Auth";
import { ChatRoomApi } from "./Api/ChatRoom";
import { FriendApi } from "./Api/Friend";
import { ProfileApi } from "./Api/Profile";

const store = configureStore({
  reducer: {
    [ProfileApi.reducerPath]: ProfileApi.reducer,
    [FriendApi.reducerPath]: FriendApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [ChatRoomApi.reducerPath]: ChatRoomApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProfileApi.middleware)
      .concat(FriendApi.middleware)
      .concat(AuthApi.middleware)
      .concat(ChatRoomApi.middleware),
});

ProfileApi.setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

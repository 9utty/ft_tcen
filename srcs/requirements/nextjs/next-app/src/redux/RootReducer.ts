import { combineReducers } from "redux";
import GlobalSlice from "./Slice/Global";
import UserSlice from "./Slice/User";
import { ChatSlice } from "./Slice/Chat";
import ProfileSlice from "./Slice/Profile";
import LoadingSlice from "./Slice/Loading";
import roomSlice from "./Slice/Room";

export const rootReducer = combineReducers({
  global: GlobalSlice.reducer,
  user: UserSlice.reducer,
  chat: ChatSlice.reducer,
  profile: ProfileSlice,
  loading: LoadingSlice.reducer,
  room: roomSlice.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export default RootState;

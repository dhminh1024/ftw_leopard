import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/user/userSlice";
import friendReducer from "../features/friend/friendSlice";
import commentReducer from "../features/comment/commentSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    friend: friendReducer,
    comment: commentReducer,
  },
});

export default store;

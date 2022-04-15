import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const a = {
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU0NWUwMjNkOGRhNmZhZjJiN2E2MzciLCJpYXQiOjE2NDk5OTIzMzIsImV4cCI6MTY1MDA3ODczMn0.lSH326_bbMoCJlIth4uB7CK_tHwK82MsRKAeYvVjqZM",
  user: {
    aboutMe: "A curious learner.",
    avatarUrl:
      "http://res.cloudinary.com/ddawlo98i/image/upload/v1649697021/coder_comm/qd0h6slrvqvovdpmlnox.png",
    city: "Ho Chi Minh City",
    company: "CoderSchool",
    country: "Vietnam",
    coverUrl: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78",
    createdAt: "2022-04-11T16:57:38.641Z",
    email: "minhdh@coderschool.vn",
    facebookLink: "https://www.facebook.com/hai.m.do",
    friendCount: 14,
    instagramLink: "",
    jobTitle: "Software Engineer",
    linkedinLink: "https://www.linkedin.com/in/haiminhdo",
    name: "Minh Hai Do",
    postCount: 1,
    twitterLink: "https://twitter.com/MinhDo87737628",
    updatedAt: "2022-04-13T05:50:51.733Z",
    __v: 0,
    _id: "62545e023d8da6faf2b7a637",
  },
  message: "Login successful",
  success: true,
};

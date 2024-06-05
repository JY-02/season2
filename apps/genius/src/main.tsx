import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RecoilRoot } from "recoil";
import App from "./App";
// import Genre from "./genre/genre";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
      {/* <Genre /> */}
      {/* <StoryFlow /> */}
    </RecoilRoot>
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainApp from "./component/MainApp.jsx";
import MyThemeProvider from "./component/MyTemeProvider.jsx";
import HookThemeButton from "./HookThemeButton.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <MainApp />
  // </StrictMode>

  <MyThemeProvider>
    <HookThemeButton />
  </MyThemeProvider>
);

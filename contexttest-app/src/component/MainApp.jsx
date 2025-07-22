import "../App.css";
import { MyAppContext, config } from "../context/MyContext.jsx";
import { HookContextChild } from "./HookContextChild.jsx";

function MainApp() {
  return (
    <MyAppContext.Provider value={config}>
      <div id="c_main">
        <HookContextChild />
      </div>
    </MyAppContext.Provider>
  );
}

export default MainApp;

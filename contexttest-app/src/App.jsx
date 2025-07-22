import "./App.css";
import "./style.css";
import React, { createContext, useContext } from "react";

// Context 생성
const themeDefault = {
  border: "10px solid green",
};
//전역으로 사용할 수 있는 Context 생성
const ThemeContext = createContext(themeDefault);

function App() {
  // themeContext 사용
  const theme = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div className="root" style={theme}>
      <h1>Hello World</h1>
      <Sub1 />
    </div>
  );
}

function Sub1() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={useContext(ThemeContext)}>
      <div style={theme}>
        <h2> Sub1</h2>
        <Sub2 />
      </div>
    </ThemeContext.Provider>
  );
}

function Sub2() {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <h2>Sub2</h2>
      <Sub3 />
    </div>
  );
}

function Sub3() {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <h2>Sub3</h2>
    </div>
  );
}

export default App;

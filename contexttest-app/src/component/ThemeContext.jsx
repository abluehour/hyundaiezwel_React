import { createContext, useState } from "react";

const ThemeContext = createContext({
  mode: "light", // 기본 모드
  toggleMode: () => {}, // 모드 토글 함수 (초기값은 빈 함수)
});

// Provider 컴포넌트 생성
export function MyThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const value = {
    Mode: mode, // HookThemeButton에서 사용하는 이름과 맞춤
    toggleMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;

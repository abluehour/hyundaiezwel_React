import { createContext } from "react";

// 컨텍스트 초기화
export const MyAppContext = createContext();

// 컨텍스트에서 전달할 객체 준비
export const config = {
  title: "React 프로젝트",
  lang: "ko-kr",
};

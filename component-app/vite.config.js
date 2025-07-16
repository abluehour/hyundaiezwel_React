import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 자동으로 브라우저 열기
    // open: 'chrome', // 특정 브라우저 지정 (옵션)
  },
});

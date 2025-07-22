import { useContext } from "react";
import { Button } from "@mui/material";
import ThemeContext from "./component/ThemeContext.jsx";

export default function HookThemeButton() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <Button onClick={toggleMode} variant="contained">
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
}

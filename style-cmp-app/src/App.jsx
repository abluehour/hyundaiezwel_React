import "./App.css";
import ReactButton from "./components/ReactButton";
import StyledButton from "./components/StyledButton";
import { SimpleButton, LargeButton } from "./components/CreateButton";
import { ReactLargeButton } from "./components/ReactExpand";
import { PrimaryButton } from "./components/DynamicsStyle";
function App() {
  return (
    <div className="App">
      <ReactButton children={"ReactButton"}></ReactButton>
      <StyledButton children={"SytleButton"}></StyledButton>
      <br />
      <SimpleButton children={"SimpleButton"}></SimpleButton>
      <br />
      <LargeButton children={"LargeButton"}></LargeButton>
      <ReactLargeButton children={"ReactLargeButton"}></ReactLargeButton>
      <PrimaryButton children={"PrimaryButton"} $primary={true}></PrimaryButton>
    </div>
  );
}

export default App;

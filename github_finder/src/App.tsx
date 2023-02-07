import { Outlet } from "react-router-dom";
import * as C from "./App.styles";

function App() {
  return (
    <C.Container>
      <h1>GitHub Finder</h1>
      <Outlet />
    </C.Container>
  );
}

export default App

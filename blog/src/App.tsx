import { Outlet } from "react-router-dom";
import * as C from "./App.styles";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <C.Container>
      <Navbar />
      <C.ContainerPage>
        <Outlet />
      </C.ContainerPage>
    </C.Container>
  );
}

export default App

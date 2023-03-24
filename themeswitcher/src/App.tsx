import { ThemeProvider, DefaultTheme } from "styled-components";
import { Header } from "./components/Header"
import { dark } from "./styles/themes/dark";
import { light } from "./styles/themes/light";
import { GlobalStyle } from './styles/GlobalStyle';
import { usePersistedState } from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import SocialBar from "./components/SocialBar";
import { AppContext } from "./contexts/AppContext";
import { Container, OutletContainer } from "./styles";
import { darkTheme, lightTheme } from "./theme";

const App = () => {

  const { darkMode } = useContext(AppContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Header />
        <OutletContainer>
          <SocialBar />
          <Outlet />
        </OutletContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;

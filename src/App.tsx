import "./App.css";
import { ThemeProvider } from "./hooks/useTheme";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Menu from "./components/molecules/Menu";
import Header from "./components/molecules/Header";
import Home from "./pages/Home";
import Main from "./components/molecules/Main";
import Skills from "./pages/Skills";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header title="{Personal Page}" />
      <Main>
        <Home />
        <AboutMe />
        <Skills />
        <Contact />
      </Main>
      <Footer />
      <Menu />
    </ThemeProvider>
  );
}

export default App;

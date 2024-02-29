// SCENES
import Home from "./Scenes/Home";
import About from "./Scenes/About";
import Classes from "./Scenes/Classes";
import Contact from "./Scenes/Contact";
import Login from "./Scenes/Login";

// COMPONENTS
import { ThemeContextProvider } from "./Contexts/ThemeContext.jsx";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <ThemeContextProvider>
        <Home />
        <About />
        <Classes />
        <Contact />
        <Login />
      </ThemeContextProvider>
      <Footer />
    </>
  );
}

export default App;

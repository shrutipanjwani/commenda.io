import "./App.css";
import Navbar from "./Components/HeaderNav/HeaderNav";
import Header from "./Sections/Header";
import About from "./Sections/About";
import Features from "./Sections/Features";
import Blog from "./Sections/Blog";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Features />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Services />
        <Team />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

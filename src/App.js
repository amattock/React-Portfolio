import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navLinks";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
import About from "./Pages/about";
// import Portfolio from "./Pages/portfolio";
// import Contact from "./Pages/contact";
// import ResumePage from "./Pages/resume";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} /> */}
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
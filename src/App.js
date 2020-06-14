import React, {Fragment} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <Fragment>
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;

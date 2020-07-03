import React, {Fragment} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import BreakTextOne from './components/break_text/breakTextOne';
import BreakTextTwo from './components/break_text/breakTextTwo';
import ContactForm from './components/contact/ContactForm';
import BreakOne from './components/break_text/BreakOne';
import BreakTwo from './components/break_text/BreakTwo';

function App() {
  return (
    <Fragment>
      <Header />
      <Skills />
      {/* <BreakTextOne /> */}
      <BreakOne />
      <Projects />
      {/* <BreakTextTwo /> */}
      <BreakTwo />
      <ContactForm />
      <Footer />
    </Fragment>
  );
}

export default App;

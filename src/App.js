import React, {Fragment} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import BreakTextOne from './components/break_text/breakTextOne';
import BreakTextTwo from './components/break_text/breakTextTwo';
import ContactForm from './components/contact/ContactForm';

function App() {
  return (
    <Fragment>
      <Header />
      <Skills />
      <BreakTextOne />
      <Projects />
      <BreakTextTwo />
      <ContactForm />
      <Footer />
    </Fragment>
  );
}

export default App;

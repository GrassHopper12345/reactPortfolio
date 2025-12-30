import React from "react";
import { PrimeReactProvider } from "primereact/api";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import EngineeringExperiments from "./components/EngineeringExperiments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <PrimeReactProvider>
      <Helmet>
        <title>Brian Hopper's Portfolio | Mid-Level Remote Software Engineer</title>
        <meta name="description" content="Portfolio of Brian Hopper, Mid-Level Remote Software Engineer specializing in full-stack web development" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Experience />
        <Skills />
        <EngineeringExperiments />
        <Contact />
      </main>
      <Footer />
    </PrimeReactProvider>
  );
}

export default App;

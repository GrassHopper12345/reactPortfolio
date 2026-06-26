import React from "react";
import { PrimeReactProvider } from "primereact/api";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import EngineeringExperiments from "./components/EngineeringExperiments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

const PAGE_TITLE = "Brian Hopper's Portfolio | Full-Stack Software Engineer";
const PAGE_DESCRIPTION =
  "Full-stack software engineer with life sciences, operations, and MBA background. Ships production apps with TypeScript, Next.js, React, and C# (.NET). This portfolio site is built with React and Vite.";

function App() {
  return (
    <PrimeReactProvider>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
      </Helmet>

      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
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

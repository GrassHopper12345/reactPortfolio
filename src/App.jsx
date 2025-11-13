import React, { useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import GameNavigation from "./components/GameNavigation";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("About");
  const [gameMode, setGameMode] = useState(false);

  const handleGameNavigate = (section) => {
    handleTabChange(section);
    setGameMode(false);
  };

  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <PrimeReactProvider>
      <Helmet>
        <title> Brian Hopper's Portfolio | {currentTab} </title>
      </Helmet>

      <GameNavigation onNavigate={handleGameNavigate} isActive={gameMode} />
      
      <Header 
        currentTab={currentTab} 
        handleTabChange={handleTabChange}
        gameMode={gameMode}
        setGameMode={setGameMode}
      />
      <main>{renderTab()}</main>
      <Footer></Footer>
    </PrimeReactProvider>
  );
}
export default App;
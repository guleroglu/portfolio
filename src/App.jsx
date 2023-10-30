import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import WhoAmI from "./components/WhoAmI/WhoAmI";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import {  GlobalProvider } from "./Context/GlobalContext";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4250);
  }, []);

  

  return (
    <div className="container">
      {loading ? (
        <LoadingScreen />
      ) : (
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whoami" element={<WhoAmI />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </GlobalProvider>
      )}
    </div>
  );
}

export default App;

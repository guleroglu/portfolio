import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, WhoAmI, Skills, Contact, Header, LoadingScreen } from "./components";
import { GlobalProvider } from "./Context/GlobalContext";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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

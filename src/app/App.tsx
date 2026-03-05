import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomCursor } from "./components/CustomCursor";
import { Preloader } from "./components/Preloader";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <CustomCursor />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Only hide cursor on non-touch devices */
        @media (hover: hover) and (pointer: fine) {
          body {
            cursor: none !important;
          }
          a, button {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}

// Main App wrapper with LanguageProvider
export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
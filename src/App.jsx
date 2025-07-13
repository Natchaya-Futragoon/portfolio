import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WiliaPage from './pages/WiliaPage';
import SpeakMatePage from "./pages/SpeakMatePage";
import FiveCatsGroceryPage from "./pages/FiveCatsGroceryPage";
import AugmentedMemoryPage from "./pages/AugmentedMemoryPage";
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AboutMe from './pages/AboutMe';
import UXProjects from './pages/UXProjects';
import CharacterWorldDesignPage from './pages/CharacterWorldDesignPage';
import ArtWorks from './pages/ArtWorks';
import BrewandBreath from './pages/BrewandBreath';
import CharacterDetailPage from './pages/CharacterDetailPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Render Navbar globally for all pages except the home page */}
      {location.pathname !== '/' && <Navbar className="top-navbar" />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wilia" element={<WiliaPage />} />
      <Route path="/speakmate" element={<SpeakMatePage />} />
      <Route path="/fivecatweb" element={<FiveCatsGroceryPage />} />
      <Route path="/augmentedmemory" element={<AugmentedMemoryPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/uxprojects" element={<UXProjects />} />
        <Route path="/characters" element={<CharacterWorldDesignPage />} />
        <Route path="/artworks" element={<ArtWorks />} />
        <Route path="/brewandbreath" element={<BrewandBreath />} />
        <Route path="/characters/:slug" element={<CharacterDetailPage />} />

        {/* Add more routes as needed */}

      </Routes>
    </>
  );
}

export default App;

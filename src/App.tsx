import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/DetailsPage';
import BrandingPage from './pages/BrandingPage';
import MediaKitPage from './pages/MediaKitPage';
import GuideChoicePage from './pages/GuideChoicePage';
import FreeGuidePage from './pages/FreeGuidePage';
import GuideUpsellPage from './pages/GuideUpsellPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<DetailsPage />} />
          <Route path="/brand" element={<BrandingPage />} />
          <Route path="/mediakit" element={<MediaKitPage />} />
          <Route path="/guide" element={<GuideChoicePage />} />
          <Route path="/freeguide" element={<FreeGuidePage />} />
          <Route path="/guide/pro" element={<GuideUpsellPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
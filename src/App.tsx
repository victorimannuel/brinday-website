import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import ScrollProgress from './components/ScrollProgress';

function AppContent() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    // Show loading state when navigating between pages
    if (navigationType !== 'POP') { // Don't show loading for browser back/forward
      setIsPageLoading(true);
      
      // Simulate page loading (in real app, this would wait for data fetching)
      const timer = setTimeout(() => {
        setIsPageLoading(false);
      }, 800); // Adjust timing based on your needs

      return () => clearTimeout(timer);
    }
  }, [location.pathname, navigationType]);

  // Hide loader when page is fully loaded
  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsPageLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <ScrollProgress />
      <PageLoader isLoading={isPageLoading} message="Loading page..." />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}
  
export default App;
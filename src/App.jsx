// src\App.jsx
import React from 'react';
import Home from './pages/Home/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PageLoader from './components/PageLoader/PageLoader';
import { usePageLoader } from './hooks/usePageLoader';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SoftwareService from './pages/Services/SoftwareService';
import NetworkService from './pages/Services/NetworkService';
import SecurityService from './pages/Services/SecurityService';
import SupportService from './pages/Services/SupportService';
import DesignService from './pages/Services/DesignService';
import Contact from './pages/Contact/Contact';

function App() {
  const { isLoading } = usePageLoader(3000); // 3 seconds minimum loading time

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <LanguageProvider>
        <ToastContainer
        position="top-right" // أو أي موقع تفضله
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true} // مهم للغة العربية
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // أو "light" أو "dark" حسب الثيم الخاص بك
      />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/software" element={<SoftwareService />} />
            <Route path="/services/network" element={<NetworkService />} />
            <Route path="/services/security" element={<SecurityService />} />
            <Route path="/services/support" element={<SupportService />} />
            <Route path="/services/design" element={<DesignService />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

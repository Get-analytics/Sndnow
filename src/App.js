// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AnalyticsOverview from './Component/AnalyticsOverview';
import ContactForm from './Component/ContactForm';
import CTASection from './Component/CTASection';
import FAQSection from './Component/FAQSection';
import FeatureSection from './Component/FeatureSection';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Hero from './Component/Hero';
import PricingSection from './Component/PricingSection';
import Testimonials from './Component/Testimonials';
import UploadSection from './Component/Uploadsection';
import UserTypeSection from './Component/UserTypeSection';
import PrivacyPolicy from './Component/PrivacyPolicy';
import TermsAndConditions from './Component/TermsAndConditions';  // Import TermsAndConditions component
import AboutUs from './Component/Aboutus';


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <UploadSection />
      <AnalyticsOverview />
      <FeatureSection />
      <UserTypeSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <ContactForm />
      <CTASection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />  {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;

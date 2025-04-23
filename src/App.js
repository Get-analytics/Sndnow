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










function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UploadSection/>
      <AnalyticsOverview/>
      <FeatureSection/>
      <UserTypeSection/>
      <Testimonials/>
      <PricingSection/>
      <FAQSection/>
      <ContactForm/>
      <CTASection/>
      <Footer/>
      {/* Add other components here */}
    </div>
  );
}

export default App;

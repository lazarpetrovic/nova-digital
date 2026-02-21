import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import Footer from "./layout/Footer";

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Portfolio />
    <AboutUs />
    <Testimonials />
    <Pricing />
    <ContactUs />
    <Footer />
    </>
  )
}

export default App

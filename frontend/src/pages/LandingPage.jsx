import Navbar from '../components/landingComponents/Navbar';
import Home from '../components/landingComponents/Home';
import AboutUs from '../components/landingComponents/AboutUs';
import Features from '../components/landingComponents/Features';
import Pricing from '../components/landingComponents/Pricing';
import SignIn from '../components/landingComponents/SignIn';
import SignUp from '../components/landingComponents/SignUp';
import { Route, Routes, useLocation } from 'react-router-dom';

function LandingPage() {

const location = useLocation()

  const hideNavbar =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";
  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default LandingPage
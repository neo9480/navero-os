import Navbar from '@/components/landingComponents/Navbar';
import Home from '@/components/landingComponents/Home';
import AboutUs from '@/components/landingComponents/AboutUs';
import Features from '@/components/landingComponents/Features';
import Pricing from '@/components/landingComponents/Pricing';
import SignIn from '@/components/landingComponents/SignIn';
import SignUp from '@/components/landingComponents/SignUp';
import { Route, Routes, useLocation } from 'react-router-dom';
import Plans from '@/components/landingComponents/Plans';
import VerifyEmail from '@/components/landingComponents/VerifyEmail';

function LandingPage() {

const location = useLocation()

  const hideNavbar =
    location.pathname.startsWith("/sign-in") || location.pathname.startsWith("/sign-up");
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
        <Route path="/sign-up/plans" element={<Plans />} />
        <Route path="/sign-up/verify-email" element={<VerifyEmail />}/>
      </Routes>
    </div>
  );
}

export default LandingPage
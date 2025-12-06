import { Routes, Route } from "react-router-dom"
import LocomotiveScroll from "locomotive-scroll"
import LandingPage from "./pages/LandingPage";

const App = () => {

  const _locomotiveScroll = new LocomotiveScroll()
  
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </main>
  );
};

export default App;
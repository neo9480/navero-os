import { Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Loader from "./components/commonComponents/Loader";
import LandingPage from "./pages/LandingPage";
import { useEffect, useState } from "react";
import Cursor from "./components/commonComponents/Cursor";
import PageTransition from "./components/commonComponents/PageTransition";

const App = () => {
  const { pathname } = useLocation();

  // ✅ Loader only on first load of "/"
  const [showLoader, setShowLoader] = useState(pathname === "/");

  // ✅ LocomotiveScroll: create once, destroy properly
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

  // ✅ Cursor listener: attach once
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const main = document.querySelector(".main");

    if (!cursor || !main) return;

    const moveCursor = (e) => {
      cursor.style.left = e.x - 8 + "px";
      cursor.style.top = e.y - 7 + "px";
    };

    main.addEventListener("mousemove", moveCursor);
    return () => main.removeEventListener("mousemove", moveCursor);
  }, [showLoader]);
  
  

  return (
    <main className="main bg-space_indigo-200 h-screen w-full">
      {showLoader && <Loader onDone={() => setShowLoader(false)} />}

      {!showLoader && (
        <>
          <PageTransition />
          <Cursor />
          <Routes>
            <Route path="/*" element={<LandingPage />} />
          </Routes>
        </>
      )}
    </main>
  );
};

export default App;


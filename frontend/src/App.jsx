import { Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Loader from "./components/commonComponents/Loader";
import LandingPage from "./pages/LandingPage";
import { useEffect, useState } from "react";
import Cursor from "./components/commonComponents/Cursor";
import PageTransition from "./components/commonComponents/PageTransition";
import Dashboard from "./pages/Dashboard";
import AnalyticsPage from "./pages/AnalyticsPage";
import DocumentsPage from "./pages/DocumentsPage";
import MarketplacePage from "./pages/MarketplacePage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import ShipmentsPage from "./pages/ShipmentsPage";
import Subscriptions from "./pages/Subscriptions";
import Invoices from "./pages/Invoices";
import useAuthStore from "./store/useAuthStore";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

  const location = useLocation();
  const { pathname } = location;

  // Loader only on first load of "/"
  const [showLoader, setShowLoader] = useState(pathname === "/");
  const [displayLocation, setDisplayLocation] = useState(location);

  const { refresh } = useAuthStore();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayLocation(location);
    }, 800); // 2 seconds for PageTransition animation

    return () => clearTimeout(timeout);
  }, [location]);

  useEffect( () => {
    refresh();
    const timeout = setTimeout(
      async () => {
        await refresh();
      },
      4 * 60 * 1000,
    );
    return () => clearTimeout(timeout);
  }, [refresh]);

  // LocomotiveScroll: create once, destroy properly

  // Cursor listener: attach once
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const main = document.querySelector(".main");

    if (!cursor || !main) return;

    const moveCursor = (e) => {
      cursor.style.left = e.x - 8 + "px";
      cursor.style.top = e.y - 7 + "px";
    };

    const mouseLeave = () => {
      cursor.style.scale = 0;
    };

    const mouseEnter = () => {
      cursor.style.scale = 1;
    };

    main.addEventListener("mousemove", moveCursor);
    main.addEventListener("mouseleave", mouseLeave);
    main.addEventListener("mouseenter", mouseEnter);
    return () => {
      main.removeEventListener("mousemove", moveCursor);
      main.removeEventListener("mouseleave", mouseLeave);
      main.removeEventListener("mouseenter", mouseEnter);
    };
  }, [showLoader]);

  return (
    <main className="main bg-space_indigo-200 h-screen w-full">
      {showLoader && <Loader onDone={() => setShowLoader(false)} />}

      {!showLoader && (
        <>
          <PageTransition />
          <Cursor />
          <Routes location={displayLocation}>
            <Route path="/*" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/shipments" element={<ShipmentsPage />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/invoices" element={<Invoices />} />
          </Routes>
        </>
      )}
    </main>
  );
};

export default App;

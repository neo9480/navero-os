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
import ProtectedRoute from "./components/commonComponents/ProtectedRoute";
import ShadowLoader from "./components/commonComponents/ShadowLoader";

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
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayLocation(location);
    }, 800); // 2 seconds for PageTransition animation

    return () => clearTimeout(timeout);
  }, [location]);

  useEffect(() => {
    refresh().finally(() => setIsBooting(false)); // ✅ wait for refresh to finish

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
          {isBooting ?
            <div className="flex justify-center bg-space_indigo-100 items-center h-full text-platinum-500 text-2xl">
              <ShadowLoader />
            </div>
          : <Routes location={displayLocation}>
              <Route path="/*" element={<LandingPage />} />
              <Route path="/load" element={<ProtectedRoute />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/analytics"
                element={
                  <ProtectedRoute>
                    <AnalyticsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/documents"
                element={
                  <ProtectedRoute>
                    <DocumentsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/marketplace"
                element={
                  <ProtectedRoute>
                    <MarketplacePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notifications"
                element={
                  <ProtectedRoute>
                    <NotificationsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/shipments"
                element={
                  <ProtectedRoute>
                    <ShipmentsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/subscriptions"
                element={
                  <ProtectedRoute>
                    <Subscriptions />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/invoices"
                element={
                  <ProtectedRoute>
                    <Invoices />
                  </ProtectedRoute>
                }
              />
            </Routes>
          }
        </>
      )}
    </main>
  );
};

export default App;

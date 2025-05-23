import React, { useEffect } from "react";

// global styles
import "./global.css";

// ui
import { Theme } from "@radix-ui/themes";

//router
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";

// //components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import LandingPage from "./pages/LandingPage";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [pathname]);

    return null;
  }

  return (
    <Theme
      appearance={"light"}
      accentColor="lime"
      grayColor="mauve"
      radius="full"
    >
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Header />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      <ScrollToTop />
    </Theme>
  );
}

export default App;

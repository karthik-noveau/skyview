import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { FullScreenLoader as Loader } from "./components/fullscreen_loader";
import { CustomComponentProviders } from "./common/custom_component_providers";

import "./common/global.override.css";
import "./common/global.css";
import { WhataApp } from "./components/whatsapp";
import SuspenseWrapper from "./common/suspense_wrapper";

// Lazy-loaded components
const NotFound = SuspenseWrapper(
  React.lazy(() => import("./common/404_not_found"))
);
const Home = SuspenseWrapper(React.lazy(() => import("./pages/home")));
const Connect = SuspenseWrapper(React.lazy(() => import("./pages/connect")));

function App() {
  const location = useLocation();
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
    }, 1000);
  }, [location]);

  return (
    <CustomComponentProviders>

      {isLoader && <Loader />}
      {!isLoader && (
        <React.Fragment>
          <Header />
          <WhataApp />

          {/* routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </React.Fragment>
      )}
    </CustomComponentProviders>
  );
}

export default App;

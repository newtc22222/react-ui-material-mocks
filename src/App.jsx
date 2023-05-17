import React from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppProvider from "./components/context/AppContext";
import { LoadingPage } from "./components/common";
import router from "./routes";

import "./styles/css/index.css";

function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <RouterProvider router={router} fallbackElement={<LoadingPage />} />
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;

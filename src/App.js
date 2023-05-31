import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./Routes/routes";
import {PreferencesProvider} from "./context/PreferencesContext";

const App = () => {
  return (
    <PreferencesProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PreferencesProvider>
  );
};

export default App;

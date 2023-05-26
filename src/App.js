import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { Button, Typography } from "@mui/material";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

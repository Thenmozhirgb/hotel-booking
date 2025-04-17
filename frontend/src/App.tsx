import React from "react";
import "./App.css";
import Header from "./header/Header";
import { Box } from "@mui/material";
import Footer from "./footer/Footer";
import AppRouter from "./routes/AppRouter";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Box>
      <AppRouter />
    </Box>
  );
}

export default App;

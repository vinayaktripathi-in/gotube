import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import { Navbar, Feed } from "./components";

const App = () => (
  <BrowserRouter className="App">
    <Box className="Navbar">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;

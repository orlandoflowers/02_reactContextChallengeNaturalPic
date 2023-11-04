import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Navbar from "./components/Navbar";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
}

export default App;

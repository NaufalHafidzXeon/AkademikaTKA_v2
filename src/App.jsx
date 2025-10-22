import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import Login from "./components/login";
import Daftar from "./components/daftar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="login" element={<Login/>} />
        <Route path="daftar" element={<Daftar/>} />
      </Routes>
    </Router>
  );
}
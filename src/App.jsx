import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero/>} />
      </Routes>
    </Router>
  );
}
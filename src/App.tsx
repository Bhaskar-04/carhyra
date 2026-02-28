import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars/:id" element={<CarDetails />} />
    </Routes>
  );
}
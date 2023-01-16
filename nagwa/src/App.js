import Practice from "./pages/Practice";
import Rank from "./pages/Rank";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/practice/:id" element={<Practice />} />
      <Route path="/rank" element={<Rank />} />
    </Routes>
  );
}

export default App;

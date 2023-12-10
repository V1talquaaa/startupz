import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Openings } from "./pages/Openings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/openings" element={<Openings />} />
      </Routes>
    </>
  );
}

export default App;

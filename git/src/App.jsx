import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OCD from "./pages/OCD";
import SuicidePrevention from "./pages/SuicidePrevention";
import Therapy from "./pages/Therapy";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/ocd" element={<OCD />} />
        <Route path="/therapy" element={<Therapy />} />

        <Route
          path="/suicide-prevention"
          element={<SuicidePrevention />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
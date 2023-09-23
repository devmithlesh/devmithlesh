import "./App.css";
import Home from "./Home/Home";
import Nomatch from "./Pages/Nomatch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Pages/Resume/Resume";

function App() {

  return (
    <>
      <div className="appmainwrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Nomatch />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

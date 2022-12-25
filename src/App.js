import "./App.css";
import Home from "./Home/Home";
import Nomatch from "./components/Nomatch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="main_app_div_container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* page note found */}
            <Route path="*" element={<Nomatch />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

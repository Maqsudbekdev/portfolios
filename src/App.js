import "./App.css";
import Home from "./pages/home/Home";
import Sign_up from "./pages/Sign_up/Sign_up";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<Sign_up />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="*" element={<Err404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

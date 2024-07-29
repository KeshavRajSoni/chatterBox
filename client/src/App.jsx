import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<h1>about</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, useState } from "react";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Chat from "./pages/Chat";
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
function App() {
  const [User, setUser] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute User={User} navigate="/login" />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<h1>groups</h1>} />
        </Route>
        <Route
          path="/login"
          element={
            <ProtectedRoute User={!User} navigate="/">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

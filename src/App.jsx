import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import HomeScreen from "./components/HomeScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homescreen" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;

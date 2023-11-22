import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Auth from "./pages/auth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/rated" element={<h1>Rated</h1>} />
      </Routes>
    </div>
  );
}

export default App;
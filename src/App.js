import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Auth from "./pages/auth";
import Home from "./pages/home";
import Movie from "./pages/movie";
import TvShow from "./pages/tvshow";
import Rated from "./pages/rated";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/rated" element={<Rated />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tvshow/:id" element={<TvShow />} />
      </Routes>
    </div>
  );
}

export default App;

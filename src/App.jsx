import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.jsx";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Users from "./pages/Users.jsx";
// import Counter from "./components/Counter";
import User from "./components/User"
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:username" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;

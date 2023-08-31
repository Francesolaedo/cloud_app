import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Support from "./pages/Support"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Platform from "./pages/Platform"
import Footer from "./components/Footer"

function App() {
  return (
      <Router>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/platform" element={<Platform/>} />
      </Routes>

        <Footer/>

      </Router>
  )
}

export default App;

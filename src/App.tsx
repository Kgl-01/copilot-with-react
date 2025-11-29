import { Link, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./Home"
import Register from "./Register"
import Employees from "./Employees"

function App() {
  return (
    <>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Home</Link> | <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </>
  )
}

export default App

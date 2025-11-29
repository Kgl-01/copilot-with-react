import { Link, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./Home"
import Register from "./Register"

function App() {
  return (
    <>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Home</Link> | <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

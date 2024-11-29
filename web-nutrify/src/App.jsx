import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/Login/index"
import ProfilePage from "./pages/Profile/index"
import Layout from "./pages/Layout/layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><LoginPage /></Layout>} />
        <Route path="/Profile" element={<Layout><ProfilePage /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App

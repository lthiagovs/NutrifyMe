import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/Login/index"
import ProfilePage from "./pages/Profile/index"
import Layout from "./pages/Layout/layout"
import ConsultationPage from './pages/Consultation/index'
import HomePage from './pages/Home/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/Login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/Profile" element={<Layout><ProfilePage /></Layout>} />
        <Route path="/Consultation" element={<Layout><ConsultationPage/></Layout>}/>
      </Routes>
    </Router>
  )
}

export default App

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/Login/index"
import ProfilePage from "./pages/Profile/index"
import Layout from "./pages/Layout/layout"
import ConsultationPage from './pages/Consultation/index'
import HomePage from './pages/Home/index'
import {AuthProvider} from './services/authprovider';
import ProtectedRoute from './services/protectedroute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/Login" element={<Layout><LoginPage /></Layout>} />
          <Route
            path="/Profile"
            element={
              <ProtectedRoute>
                <Layout><ProfilePage /></Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/Consultation"
            element={
              <ProtectedRoute>
                <Layout><ConsultationPage /></Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App

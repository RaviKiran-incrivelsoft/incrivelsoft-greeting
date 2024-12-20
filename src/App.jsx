import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import CampaignDashboard from './pages/CampaignDashboard';
import AddPost from './pages/AddPost';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<ServicePage />} path='/service' />
        <Route element={<ContactPage />} path='/contact' />
        <Route element={<CampaignDashboard />} path='/campaign' />
        <Route element={<AddPost />} path='/addpost' />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

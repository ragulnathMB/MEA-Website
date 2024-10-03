import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/Contact/Contact';
import OurTeam from './components/OurTeam/OurTeam';
import Event from './components/Events/Events';
import Loading from './components/Loading/Loading'; 
import './App.css';
import AdminLogin from './components/AdminLogin/AdminLogin';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); 

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return <Loading />; 
  }

  return (
    <div className='body'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/events" element={<Event />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

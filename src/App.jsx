import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import JoinOurTeam from './pages/JoinOurTeam';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

        <Route path="/JoinOurTeam" element={<JoinOurTeam />} />
        <Route path="/ContactUs" element={<ContactUs/>} />

        ContactUs
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

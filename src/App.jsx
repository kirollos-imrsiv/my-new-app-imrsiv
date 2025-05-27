import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // تأكد إن الملفات دي موجودة
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import JoinOurTeam from './pages/JoinOurTeam';
import ContactUs from './pages/ContactUs';
import FirebaseChat from "./FirebaseChat";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const chatButtonStyle = {
    position: 'fixed',
    bottom: '80px',
    right: '30px',
    backgroundColor: '#ff69b4',  
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '28px',
    boxShadow: '0 4px 12px rgba(255,105,180,0.6)',
    zIndex: 1000,
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'background-color 0.3s ease',
  };

  return (
    <Router>
<div className="font-inter text-black" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
<Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            {/* يمكنك حذف هذا المسار إذا لن تستخدم صفحة كاملة للشات */}
            <Route path="/chat" element={<FirebaseChat />} /> 
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/JoinOurTeam" element={<JoinOurTeam />} />
          </Routes>
        </main>
        
        {/* زر فتح/إغلاق الشات */}
        <button
          onClick={() => setIsChatOpen(prev => !prev)}
          style={chatButtonStyle}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ff85c1'}  
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ff69b4'}
          aria-label={isChatOpen ? "إغلاق الشات" : "فتح الشات"}
          title={isChatOpen ? "إغلاق الشات" : "فتح الشات"}
        >
          <i className="fas fa-comment-dots"></i>
        </button>

        {/* نافذة الشات المنبثقة */}
        {isChatOpen && (
          <div
            style={{
              position: 'fixed',
              bottom: '150px',
              right: '30px',
              width: '350px',
              height: '450px',
              backgroundColor: 'white',
              boxShadow: '0 0 15px rgba(0,0,0,0.3)',
              borderRadius: '10px',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* رأس النافذة وزر الإغلاق */}
            <div style={{ padding: '8px 12px', backgroundColor: '#ff69b4', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
              <span>الشات المباشر</span>
              <button
                onClick={() => setIsChatOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: '22px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  lineHeight: '1',
                }}
                aria-label="إغلاق الشات"
                title="إغلاق الشات"
              >
                ×
              </button>
            </div>

            {/* محتوى الشات */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <FirebaseChat />
            </div>
          </div>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;

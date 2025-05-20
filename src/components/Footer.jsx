import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="bg-fuchsia-600 text-white py-10">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* أيقونات السوشيال ميديا */}
        <div className="flex gap-6 text-xl">
          <a href="https://www.facebook.com/imrsivtech/" className="hover:text-gray-300 transition">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/imrsivtech/" className="hover:text-gray-300 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/imrsivtech" className="hover:text-gray-300 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/IMRSIVtech" className="hover:text-gray-300 transition">
            <FaXTwitter />
          </a>
        </div>

        {/* حقوق النشر */}
        <p className="text-sm text-center">
          Copyright © 2025 <span className="font-semibold">IMRSIV</span> • All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

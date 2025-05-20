import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

// مواعيد العمل لكل يوم
const hours = {
  Sun: "09:00 am – 06:00 pm",
  Mon: "09:00 am – 06:00 pm",
  Tue: "09:00 am – 06:00 pm",
  Wed: "09:00 am – 06:00 pm",
  Thu: "09:00 am – 06:00 pm",
  Fri: "Closed",
  Sat: "Closed",
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Home = () => {
  const today = new Date();
  const currentDay = days[today.getDay()];
  const [showAllDays, setShowAllDays] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center space-y-10">
      {/* Contact Section */}
      <section>
        <h2 className="text-xl font-bold uppercase mb-4">
          <span className="bg-black text-white px-5 py-2 inline-block rounded-sm">
            Contact Us
          </span>
        </h2>
        <h3 className="text-3xl font-semibold">
          Hire Us and See Positive Results
        </h3>
      </section>

      <hr />

      {/* Message Section */}
      <section>
        <p className="text-gray-700 text-base leading-relaxed max-w-xl mx-auto">
          We believe that a business with a great marketing team can make an
          impact on the world. Take the first step: contact us, and together, we
          will reach your company's goals.
        </p>
        <h2 className="text-3xl font-bold uppercase mt-8">IMRSIV</h2>
      </section>

      <hr />

      {/* Address & Phone */}
      <section>
        <p className="text-gray-700 max-w-xl mx-auto">
          Al Zahia Area - Entrance No. 2 - Ground Floor - Sheikh Mohammed Bin
          Zayed Rd - Sharjah - United Arab Emirates
        </p>

        <div className="space-y-2 text-base font-medium mt-6">
          <p>
            EGYPT{" "}
            <span className="text-fuchsia-700 font-bold">
              +201050998518
            </span>
          </p>
          <p>
            UAE{" "}
            <span className="text-fuchsia-700 font-bold">
              +971501774190
            </span>
          </p>
          <p>
            USA{" "}
            <span className="text-fuchsia-700 font-bold">
              +12519997705
            </span>
          </p>
        </div>

        <h2 className="text-3xl font-bold uppercase mt-10">Hours</h2>
      </section>

      <hr />

      {/* Hours Section - Toggle View */}
      <section className="text-sm text-gray-700 cursor-pointer">
        <div
          onClick={() => setShowAllDays(!showAllDays)}
          className="font-bold text-black transition hover:underline"
        >
          {currentDay}{" "}
          <span className="text-fuchsia-700 font-bold">
            {hours[currentDay]}
          </span>
        </div>

        {showAllDays && (
          <div className="space-y-1 mt-4">
            {days.map((day) =>
              day === currentDay ? null : (
                <p key={day} className="text-gray-600">
                  {day}{" "}
                  <span className="text-gray-500">{hours[day]}</span>
                </p>
              )
            )}
          </div>
        )}
      </section>

      {/* Social Media Icons */}
      <section className="flex justify-center items-center space-x-4 text-2xl">
        <a
          href="https://www.facebook.com/imrsivtech/"
          className="p-3 text-blue-600 hover:bg-blue-100 rounded-full transition"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/imrsivtech/"
          className="p-3 text-pink-600 hover:bg-pink-100 rounded-full transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/imrsivtech"
          className="p-3 text-blue-700 hover:bg-blue-200 rounded-full transition"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://x.com/IMRSIVtech"
          className="p-3 text-blue-400 hover:bg-blue-100 rounded-full transition"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
      </section>
    </div>
  );
};

export default Home;

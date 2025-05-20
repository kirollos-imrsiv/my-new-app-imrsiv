import React, { useState } from 'react';
import serversHome from '../assets/Services/servers.home.webp';
import ignitionImg1 from '../assets/Services/serv1.webp';
import ignitionImg2 from '../assets/Services/ser2.webp';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const JoinOurTeam = () => {
  const [openJob, setOpenJob] = useState(null);

  const toggleJob = (jobCode) => {
    setOpenJob(openJob === jobCode ? null : jobCode);
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Section 1: Intro & Form */}
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-12 bg-gradient-to-r bg-black text-white rounded-lg p-8 shadow-lg">
        {/* Info Section */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="bg-white text-fuchsia-800 px-6 py-3 inline-block rounded-md font-bold text-xl mb-5 shadow-sm">
            Join Our Team,
          </h2>
          <h3 className="text-4xl font-extrabold mb-6 leading-tight">
            We're Looking for Talented Individuals
          </h3>
          <p className="text-lg mb-5 leading-relaxed opacity-90">
            Passionate about digital marketing? Eager to contribute to a dynamic team? Explore our open positions below and apply directly!
          </p>
          <p className="text-md opacity-90">
            Interested in a specific role? Use the form on the right. For general inquiries, feel free to message us.
          </p>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 bg-white rounded-lg p-8 shadow-lg text-gray-900">
          <h3 className="text-3xl font-bold mb-6 text-center text-fuchsia-700">Apply Now</h3>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-semibold">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>

            <div>
              <label htmlFor="resume" className="block mb-2 font-semibold">Attach Resume</label>
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                className="w-full text-sm text-gray-600 file:bg-fuchsia-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none cursor-pointer hover:file:bg-fuchsia-700"
              />
              <p className="text-gray-500 text-xs mt-1">PDF or DOCX format only.</p>
            </div>

            <button
              type="submit"
              className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-3 rounded-md font-semibold transition-shadow shadow-md hover:shadow-lg"
            >
              Submit Application
            </button>

            <p className="text-gray-400 text-xs mt-3 text-center">
              By submitting, you agree to our{' '}
              <a href="#" className="text-fuchsia-600 hover:underline font-medium">
                privacy policy
              </a>.
            </p>
          </form>
        </div>
      </div>

      {/* Open Vacancies Header */}
      <div className="max-w-7xl mx-auto mt-20 mb-8  bg-black w-[25%] ">
        <h1 className="text-4xl font-extrabold text-center text-white">Open Vacancies</h1>
      </div>

      {/* Open Vacancies List */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 space-y-6  p-10">
        {[
          {
            code: 1001,
            title: 'Senior Digital Marketing Specialist',
            overview: 'Responsible for developing and managing digital marketing strategies.',
            responsibilities: [
              'Develop and execute comprehensive digital marketing strategies.',
              'Manage and optimize paid search campaigns.',
              'Oversee social media strategy and develop campaigns to increase engagement.',
            ],
            qualifications: [
              'Bachelor’s degree in Marketing or related field.',
              'Proven experience in digital marketing.',
            ],
          },
          {
            code: 1002,
            title: 'Senior Content Strategist',
            overview: 'Responsible for creating content strategies and overseeing content creation.',
            responsibilities: [
              'Develop content marketing strategies.',
              'Manage content calendars and collaborate with content creators.',
            ],
            qualifications: [
              'Bachelor’s degree in Communications or related field.',
              'Experience in content strategy and creation.',
            ],
          },
          {
            code: 1003,
            title: 'Senior Creative Designer',
            overview: 'Responsible for creating visual designs for various projects.',
            responsibilities: [
              'Design graphics for online and offline media.',
              'Collaborate with marketing teams on design projects.',
            ],
            qualifications: [
              'Bachelor’s degree in Graphic Design or related field.',
              'Experience with design software (e.g., Adobe Creative Suite).',
            ],
          },
          {
            code: 1004,
            title: 'Digital Sales Expert',
            overview: 'Responsible for driving digital sales strategies.',
            responsibilities: [
              'Develop sales strategies for digital channels.',
              'Analyze sales data and market trends.',
            ],
            qualifications: [
              'Bachelor’s degree in Business or related field.',
              'Experience in digital sales and analytics.',
            ],
          },
        ].map((job) => (
          <div
            key={job.code}
            className="bg-white rounded-lg shadow-md p-6 transition hover:shadow-lg"
          >
            <button
              onClick={() => toggleJob(job.code)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
              aria-expanded={openJob === job.code}
            >
              <h3 className="text-xl font-semibold text-fuchsia-700 hover:text-fuchsia-900 transition">
                {job.title} <span className="text-sm font-normal text-gray-500">(Code: {job.code})</span>
              </h3>
              <svg
                className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                  openJob === job.code ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openJob === job.code && (
              <div className="mt-5 text-gray-700 space-y-4">
                <p><strong>Role Overview:</strong> {job.overview}</p>
                <p><strong>Key Responsibilities:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                <p><strong>Qualifications:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  {job.qualifications.map((qual, idx) => (
                    <li key={idx}>{qual}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

{/* image */}
<div className="flex flex-col md:flex-row    ">
  <img
    src={serversHome}
    alt="Digital Ignition"
    className="mb-4 md:mb-0 w-full md:w-1/3 h-56 object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
  />
  <img
    src={ignitionImg1}
    alt="Digital Ignition"
    className="mb-4 md:mb-0 w-full md:w-1/3 h-56 object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
  />
  <img
    src={ignitionImg2}
    alt="Digital Ignition"
    className="mb-4 md:mb-0 w-full md:w-1/3 h-56 object-cover transform transition-transform duration-300 hover:scale-105 cursor-pointer"
  />
</div>



       {/* Social Media Icons */}
          <section className="flex justify-center items-center space-x-4 text-2xl mt-10">
            <a
              href="https://www.facebook.com/imrsivtech/7"
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
            <aكز
              href="https://x.com/IMRSIVtech"
              className="p-3 text-blue-400 hover:bg-blue-100 rounded-full transition"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </aكز>
          </section>

      <div className="h-16"></div>
    </div>
  );
};

export default JoinOurTeam;

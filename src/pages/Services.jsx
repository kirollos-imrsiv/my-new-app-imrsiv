import React from 'react';
import serversHome from '../assets/Services/servers.home.webp';
import ignitionImg1 from '../assets/Services/serv1.webp';
import ignitionImg2 from '../assets/Services/ser2.webp';
import ignitionImg3 from '../assets/Services/ser3.webp';

const Services = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header Image */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${serversHome})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/20">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 max-w-4xl leading-snug">
            Join the Digital Revolution with IMRSIV - Your Digital Experts
          </h1>
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-black py-16 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to IMRSIV</h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Welcome to IMRSIV! I'm George, and I'm thrilled to guide you through our immersive digital solutions. Explore our world of innovative services designed to transform your digital presence effortlessly. Let's embark on a journey to redefine your digital landscape together!
        </p>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 bg-white text-center">
        <h2 className="text-2xl font-bold uppercase mb-12">
          <span className="bg-black text-white px-6 py-2 inline-block rounded-sm">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{
            img: ignitionImg1,
            title: 'Digital Ignition',
            items: [
              'Foundational Digital Process',
              'Digital Assets',
              'Brand Establishment',
              'Site setup and digital presence',
              'Entry-level digital identity',
            ]
          }, {
            img: ignitionImg2,
            title: 'Digital Momentum',
            items: [
              'Growth phase strategy',
              'Engagement & Reach',
              'Enhanced Experience',
              'Reinforced communication',
              'Progression to Maturity',
            ]
          }, {
            img: ignitionImg3,
            title: 'Digital Thrust',
            items: [
              'Digital Excellence',
              'Scalability & Automation',
              'Comprehensive Strategy',
              'Tech Integration',
              'Maximum Optimization',
            ]
          }].map((service, idx) => (
            <div key={idx} className="text-left">
              <img src={service.img} alt={service.title} className="mb-4 w-full h-56 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Leads Section */}
      <div className="text-center my-16">
        <h2 className="text-2xl font-bold uppercase">
          <span className="bg-black text-white px-6 py-2 inline-block rounded-sm">
            Get More Leads and Sales with IMRSIV
          </span>
        </h2>
      </div>

      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Boost Your Online Presence with IMRSIV</h3>
            <hr className="mb-4" />
            <p className="text-lg mb-4">
              We provide top-notch internet marketing services to help your business reach its full potential. Our all-encompassing approach can include SEO, content marketing, email marketing, PPC, and more.
            </p>
            <p>
              Whether you’re a small startup or a growing business, let us help you amplify your presence.
            </p>
          </div>
          <img src={serversHome} alt="Get Leads" className="w-full md:w-1/2 rounded shadow-lg" />
        </div>
      </div>

      {/* Boost Section */}
      <div className="bg-white py-16 px-4">
        <h2 className="text-2xl font-bold uppercase text-center mb-12">
          <span className="bg-black text-white px-6 py-2 inline-block rounded-sm">Boost Your Online Presence</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          {[
            ['Search Engine Optimization', 'Our team will help you optimize your website to rank higher on search engines and attract more potential customers.'],
            ['Social Media Marketing', 'We develop comprehensive social media strategies to engage your target audience and drive traffic.'],
            ['Email Marketing', 'Create effective campaigns to nurture leads and convert them into loyal customers.'],
            ['Content Marketing', 'Engage your audience with blog posts, infographics, videos, and more.'],
            ['Pay-Per-Click Advertising', 'Drive targeted traffic with optimized Google Ads and Facebook Ads campaigns.'],
            ['Website Design and Development', 'Build professional, SEO-optimized websites that convert visitors into customers.'],
          ].map(([title, description], i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-2 border-b pb-2">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Appointments Section */}
      <div className="text-center my-16">
        <h2 className="text-2xl font-bold uppercase">
          <span className="bg-black text-white px-6 py-2 inline-block rounded-sm">Online Appointments</span>
        </h2>
      </div>

      <div className="text-center my-12">
        <h2 className="text-xl font-bold uppercase">
          <span className="bg-gray-200 text-gray-600 px-6 py-2 inline-block rounded-sm">
            New services are coming soon!
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Services;

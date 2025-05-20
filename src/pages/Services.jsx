import React from 'react';
import serversHome from '../assets/Services/servers.home.webp';
import ignitionImg1 from '../assets/Services/serv1.webp'
import ignitionImg2 from '../assets/Services/ser2.webp'
import ignitionImg3 from '../assets/Services/ser3.webp'

const Services = () => {
  return (
    <div>
      {/* Header Image */}
      <div
        className="relative w-full  h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${serversHome})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-4xl font-bold mb-6">
            Join the Digital Revolution with IMRSIV - Your Digital Experts
          </h1>
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
            Book Online
          </button>
        </div>
      </div>                

      <div className='bg-black h-70 te items-center justify-center text-center  text-white' >
         <h1 className='text-6xl p-7'>Welcome to IMRSIV</h1>
         <p className='text-2xl'>Welcome to IMRSIV! I'm George , and I'm thrilled to guide you through our immersive digital solutions. Explore our world of innovative services designed to transform your digital presence effortlessly. Let's embark on a journey to redefine your digital landscape together!</p>
      </div>

      
     
      {/* Services Boxes */}
      <div className="py-20 px-6 bg-white text-center">
      <div className="text-center my-8"> <h2 className="text-xl font-bold uppercase"> 
        <span className="bg-black text-white px-5 py-2 inline-block rounded-sm"> 
        Services </span> 
          </h2> 
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div>
            <img src={ignitionImg1} alt="Digital Ignition" className="mb-4 w-full h-56 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Digital Ignition</h3>
            <ul className="text-left list-disc list-inside text-sm">
              <li>Foundational Digital Process</li>
              <li>Digital Assets</li>
              <li>Brand Establishment</li>
              <li>Site setup and digital presence</li>
              <li>Entry-level digital identity</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div>
            <img src={ignitionImg2} alt="Digital Momentum" className="mb-4 w-full h-56 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Digital Momentum</h3>
            <ul className="text-left list-disc list-inside text-sm">
              <li>Growth phase strategy</li>
              <li>Engagement & Reach</li>
              <li>Enhanced Experience</li>
              <li>Reinforced communication</li>
              <li>Progression to Maturity</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div>
            <img src={ignitionImg3} alt="Digital Thrust" className="mb-4 w-full h-56 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Digital Thrust</h3>
            <ul className="text-left list-disc list-inside text-sm">
              <li>Digital Excellence</li>
              <li>Scalability & Automation</li>
              <li>Comprehensive Strategy</li>
              <li>Tech Integration</li>
              <li>Maximum Optimization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center my-8"> <h2 className="text-xl font-bold uppercase"> 
        <span className="bg-black text-white px-5 py-2 inline-block rounded-sm"> 
        Get More Leads and Sales with IMRSIV </span> 
          </h2> 
          </div>

      {/* Lead Gen Section */} 
      <div className="bg-gray-100 py-16 px-6 bg-gray-100">
       
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className='text-2xl  mb-4'>Boost Your Online Presence with IMRSIV
            </h3>
            <hr />
            <p className="text-lg text-gray-700 mb-4 p-2">
              We provide top-notch internet marketing services to help your business reach its full potential. Our all-encompassing approach can include SEO, content marketing, email marketing, PPC, and more.
            </p>
            <p className="text-gray-700 p-2">
              Whether you’re a small startup or a growing business, let us help you amplify your presence.
            </p>
          </div>
          <img src={serversHome} alt="Get Leads" className="w-full md:w-1/2 rounded shadow-lg" />
        </div>
      </div>

     {/* Boost Section */}
<div className="bg-white py-16 px-6 text-center font-sans">
<div className="text-center my-8">
         <h2 className="text-xl font-bold uppercase"> 
        <span className="bg-black  text-white px-5 py-2 inline-block rounded-sm"> 
        Boost Your Online Presence</span> 
          </h2> 
          </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left text-gray-800 text-base leading-relaxed">
    <div>
      <h3 className="text-lg font-semibold mb-2 border-b pb-2">Search Engine Optimization</h3>
      <p>
        Our team of experts will work with you to optimize your website to rank higher on search engines like Google, Bing, and Yahoo. This will increase your visibility and attract more potential customers to your website.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 border-b pb-2">Social Media Marketing</h3>
      <p>
        We will help you develop a comprehensive social media strategy to engage your target audience on platforms like Facebook, Twitter, and Instagram. This will help you build brand awareness and drive traffic to your website.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 border-b pb-2">Email Marketing</h3>
      <p>
        Our team will help you create effective email campaigns to nurture leads and convert them into customers. We will also help you build and grow your email list to reach a wider audience.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 border-b pb-2">Content Marketing</h3>
      <p>
        We will work with you to create high-quality and engaging content that will help you attract and retain your target audience. This includes blog posts, infographics, videos, and more.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 border-b pb-2">Pay-Per-Click Advertising</h3>
      <p>
        Our team will help you create and manage effective PPC campaigns on platforms like Google Ads and Facebook Ads. This will help you drive targeted traffic to your website and increase conversions.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 border-b pb-2">Website Design and Development</h3>
      <p>
        We will help you create a professional and user-friendly website that is optimized for SEO and designed to convert visitors into customers. Our team will handle everything from design to development to launch.
      </p>
    </div>
  </div>
</div>


      
      <div className="text-center my-8">
         <h2 className="text-xl font-bold uppercase"> 
        <span className="bg-black  text-white px-5 py-2 inline-block rounded-sm"> 
        Online Appointments</span> 
          </h2> 
          </div>
      {/* Appointment Section */}
      <div className="text-center my-8">
         <h2 className="text-xl font-bold uppercase"> 
        <span className="bg-gray-200  text-gray-500 px-5 py-2 inline-block rounded-sm"> 
        New services are coming soon! </span> 
          </h2> 
          </div>

      </div>
  );
};

export default Services;








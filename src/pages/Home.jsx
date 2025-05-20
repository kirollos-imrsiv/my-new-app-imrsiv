import React from 'react';
import homeImg from '../assets/homeimrsiv.jpeg';
import aboutUs from '../assets/aboutUs.jpeg';
// components/ImageCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// الصور
import slide1 from '../assets/imagScroll/cr=w_95,h_100.webp';
import slide2 from '../assets/imagScroll/cr=w_100,h_100.webp';
import slide3 from '../assets/imagScroll/cr=w_379,h_100.webp';
import slide4 from '../assets/imagScroll/rs=h_100,cg_true,m.webp';
import slide5 from '../assets/imagScroll/rs=w_90,h_100,cg_true.webp';
import slide6 from '../assets/imagScroll/rs=w_100,h_100,cg_true.webp';
import slide7 from '../assets/imagScroll/rs=w_351,h_100,cg_true.webp';
import slide8 from '../assets/imagScroll/rs=w_489,h_100,cg_true.webp';
import slide9 from '../assets/imagScroll/rs=w_504,h_100,cg_true.webp';

const images = [slide1, slide2 ,slide3 , slide4, slide5,slide6 , slide7, slide8, slide9];

const Home = () => {
  return (
    <div>
      {/* Home Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        <div className="ml-10 max-w-xl">
          <div className="bg-black text-white uppercase tracking-widest text-sm px-4 py-2 inline-block mb-4">
            Build your digital success
          </div>

          <div className="bg-white text-black p-8 rounded shadow-lg">
            <h1 className="text-5xl font-semibold leading-tight">
              Stand out from <br /> the crowd
            </h1>
          </div>

          <button className="mt-6 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition">
            Book Online
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="py-20 px-10 text-center bg-gray-100">
        <h1 className="text-4xl font-semibold mb-4">Subscribe</h1>
        <h5 className="mb-8 max-w-xl mx-auto">
          Sign up to hear from us about specials, sales, and events.
        </h5>

        <form className="max-w-xl mx-auto">
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

          <button
            type="submit"
            className="mt-6 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* About Us Section */}
      <div
        className="relative w-full bg-cover bg-center py-20 px-8"
        style={{ backgroundImage: `url(${aboutUs})` }}
      >
        <div className="bg-white bg-opacity-80 p-10 rounded-lg max-w-3xl mx-auto shadow-lg">
          <h1 className="text-4xl font-bold mb-6 bg-black text-white inline-block px-4 py-2 rounded">
            About Us
          </h1>

          <p className="text-lg mb-6 text-center">
            At IMRSIV, we're a team of tech geeks on a mission. Our goal? To power up businesses in the digital era. We're here to make the digital transition smooth and exciting, providing cutting-edge solutions that drive growth and success.
          </p>

          <h2 className="text-3xl font-semibold mb-4 mt-8 text-left">Our Vision</h2>
          <p className="text-lg mb-6 text-center">
            We're a young and ambitious startup at IMRSIV, envisioning a digital future where every business, big or small, masters the digital game. We're geared up to guide them toward global success, using our innovative tech expertise to redefine their digital journey.
          </p>

          <h2 className="text-3xl font-semibold mb-4 mt-8 text-left">Industry Wide Success</h2>
          <p className="text-lg mb-4 text-center">
            We work with a large number of clients from various industries, including:
          </p>

          <ul className="list-disc list-inside text-lg mb-6 max-w-md mx-auto text-left">
            <li>Real Estate</li>
            <li>Interior Design</li>
            <li>Education</li>
            <li>Retail</li>
            <li>Manufacturing</li>
            <li>Software</li>
          </ul>

          <p className="text-lg text-center">
            Our digital experts are ready to assist you in your digital journey from Ignition to Thrust.
          </p>
        </div>
      </div>
{/* Image Carousel Section */}
<div className="w-full max-w-7xl mx-auto mt-12 mb-20 px-4">
  <Swiper
    modules={[Navigation, Autoplay]}  // شيلت Pagination عشان أشيل النقط
    spaceBetween={12}
    slidesPerView={5}
    loop={true}
    navigation
    // pagination={{ clickable: true }}  // ألغيت Pagination
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    className="rounded-xl shadow-lg w-full"
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 10 },
      640: { slidesPerView: 2, spaceBetween: 12 },
      768: { slidesPerView: 3, spaceBetween: 12 },
      1024: { slidesPerView: 4, spaceBetween: 12 },
      1280: { slidesPerView: 5, spaceBetween: 12 },
    }}
  >
    {images.map((img, index) => (
      <SwiperSlide key={index} className="flex justify-center">
        <img
          src={img}
          alt={`Slide ${index + 1}`}
          className="w-[160px] h-[240px] object-contain  rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* تعديل لون الأسهم */}
  <style jsx>{`
    /* الأسهم السابقة واللاحقة */
    .swiper-button-next,
    .swiper-button-prev {
      color: #d946ef; /* fuchsia-600 لون فوشيا */
      filter: drop-shadow(0 0 2px rgba(0,0,0,0.3));
    }
    /* حجم الأسهم */
    .swiper-button-next,
    .swiper-button-prev {
      width: 30px;
      height: 30px;
    }
  `}</style>
</div>


    </div>
  );
};

export default Home;

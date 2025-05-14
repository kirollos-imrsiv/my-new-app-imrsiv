import React from 'react';
import homeImg from '../assets/homeimrsiv.jpeg'; // أو ضع اسم الصورة التي رفعتها

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${homeImg})` }}
    >
      <div className="ml-10">
        <div className="bg-black text-white uppercase tracking-widest text-sm px-4 py-2 inline-block mb-4">
          Build your digital success
        </div>

        <div className="bg-white text-black p-6 max-w-xl">
          <h1 className="text-5xl font-semibold leading-tight">
            Stand out from <br /> the crowd
          </h1>
        </div>

        <button className="mt-6 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
          Book Online
        </button>
      </div>
    </div>
  );
};

export default Home;

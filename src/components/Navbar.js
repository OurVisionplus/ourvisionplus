// src/components/Navbar.js
import React from 'react';

const Navbar = () => (
  <nav className="bg-white p-4 m-5 flex items-center fixed w-full top-0 z-10">
    <div className="text-black text-3xl font-bold mr-auto">OurVision+</div>
    <button type="button" className="bg-green-500 text-white px-4 py-2 mr-10 rounded">Contact</button>
  </nav>
);

export default Navbar;

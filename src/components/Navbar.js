import React from 'react';

const Navbar = () => (
  <nav className="bg-white p-7 m-0 flex items-center fixed w-full top-0 z-10">
    <img src="assets/images/Ourvision.png" alt="Logo" className="h-16 mr-auto" />
    <a
      href="#challenge"
      className="text-white bg-green-500 px-4 py-2 mr-10 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
    >
      Contact
    </a>
  </nav>
);

export default Navbar;

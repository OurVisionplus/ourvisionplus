import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-4">
    <p className="text-sm">&copy; 2023. Made with love in Omaha.</p>
    <div className="flex justify-center mt-2">
      <a href="/privacy-policy" className="mr-4">Privacy Policy</a>
      <a href="/terms-of-use">Terms of Use</a>
    </div>
  </footer>
);

export default Footer;

import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'; 
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Site Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">togthr2sale</h1>
          <p className="text-gray-400">Your go-to platform for collaborative sales</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0 ">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-500">
            <Facebook /> 
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-300">
            <Twitter />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-500">
            <Instagram />
          </a>
          <a href="mailto:contact@togthr2sale.com" aria-label="Email" className="hover:text-red-500">
            <Mail />
          </a>
        </div>

        {/* Copyright Information */}
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} togthr2sale. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

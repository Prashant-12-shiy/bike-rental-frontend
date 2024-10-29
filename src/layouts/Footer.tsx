import { Facebook, Film, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t border-black mt-4 max-h-screen py-7">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center place-items-center ">
        <Link to="/">
          {" "}
          <h2 className="text-2xl text-red-600 font-semibold">Bike Rental</h2>
        </Link>

        <div>
          <h2 className="font-semibold">Quick Links</h2>
          <ul className="text-sm cursor-pointer ">
            <li className="hover:text-red-500">Home</li>
            <li className="hover:text-red-500">Browse Bike</li>
            <li className="hover:text-red-500">About Us</li>
            <li className="hover:text-red-500">Contact us</li>
            <li className="hover:text-red-500">FAQs</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Contact Information</h2>
          <ul className="text-sm *:flex *:items-center cursor-pointer">
            <li className="hover:text-red-500">
              <Phone className="scale-50 " /> 9876543210
            </li>
            <li className="hover:text-red-500">
              <Mail className="scale-50" /> demo123@gmail.com
            </li>
            <li className="hover:text-red-500">
              <Facebook className="scale-50" />
              Facebook
            </li>
            <li className="hover:text-red-500">
              <Instagram className="scale-50" />
              Instagram
            </li>
            <li className="hover:text-red-500">
              <Film className="scale-50" /> Tiktok
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-5 cursor-pointer">Terms & Policies</div>
    </div>
  );
};

export default Footer;

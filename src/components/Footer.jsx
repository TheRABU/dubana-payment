import logo from "../assets/logo-dubana.PNG";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#012077] w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-white font-semibold flex justify-between items-start">
          <div className="left-side flex flex-col items-start max-w-md">
            <div className="logo mb-6">
              <img className="h-14" src={logo} alt="Dubana Logo" />
            </div>
            <div>
              <p className="text-white">
                Connecting Innovation, Culture, and Community – Uniting
                Bangladeshi-American tech professionals to foster creativity,
                celebrate our heritage, and build meaningful connections that
                drive personal and professional growth.
              </p>
            </div>
          </div>
          <div className="right-side">
            <div>
              <h1 className="text-lg font-bold mb-4">Social Media</h1>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <div className="fb w-7 border-1 rounded-md border-white p-1">
                <FaFacebookF className="text2xl" />
              </div>
              <div className="fb w-7 border-1 rounded-md border-white p-1">
                <FaLinkedinIn className="text2xl" />
              </div>
              <div className="fb w-7 border-1 rounded-md border-white p-1">
                <FaYoutube className="text2xl" />
              </div>
              <div className="fb w-7 border-1 rounded-md border-white p-1">
                <FaTwitter className="text2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-evenly mt-20">
          <div className="flex justify-center items-center text-white">
            <MdOutlinePhoneForwarded className="text-2xl mr-2" />
            <p>929-301-6028</p>
          </div>
          <div className="flex justify-center items-center px-2 text-white">
            <MdOutlineEmail className="text-2xl mr-2" />
            <p>info@dubana.com</p>
          </div>
          <div className="flex justify-center items-center px-2 text-white">
            <FaLocationDot className="text-2xl mr-2" />
            <p>625W 57th St, New York, NY 10019</p>
          </div>
        </div>
        <hr className="bg-white h-0.5 mt-5" />
        <div className="flex justify-center items-center space-x-2 mt-5">
          <span className="text-lg text-white">&copy; 2025 Dubana.</span>{" "}
          <p className="text-lg text-white">
            All Rights Reserved. Designed & Developed by{" "}
            <span className="font-bold">Wyth Myth</span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

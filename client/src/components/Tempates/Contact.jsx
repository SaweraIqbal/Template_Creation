import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import useDownloadImage from '../customHook/useDownloadImage';

const Contact = () => {
  const downloadImage = useDownloadImage();

  const handleDownloadClick = () => {
    downloadImage('.download-container ', 'Contact.png');
  };
  return (
    <>
    <div className="download-container flex flex-col mt-2">
      {/* Left Side */}
      <div className="flex-1 bg-slate-800 p-4 w-full text-white">
        <h1 className="text-[12px] font-bold mb-2">Contact Us</h1>
        <form className="space-y-2">
          <div>
            <label htmlFor="name" className="block text-[10px] font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-[8px]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[10px] font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-[8px]"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[10px] font-medium">Message</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-[8px]"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-[10px]"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className="flex-1  bg-white">
        <div className="mt-2">
          <h2 className="text-[15px] font-bold mb-2">Get in Touch</h2>
          <h3 className="text-[12px] mb-2">Hey! We are looking forward to start a project with you!</h3>
          <p className="mb-2 text-[8px]">Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.</p>
        </div>

        <div className="flex flex-col space-y-4 mt-2">

          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" className="text-blue-600">
              <FaFacebook size={24} />
            </a>
            <a href="https://linkedin.com" className="text-blue-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" className="text-pink-600">
              <FaInstagram size={24} />
            </a>
            <a href="https://whatsapp.com" className="text-green-500">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
     <div className="flex justify-end ">
     <button onClick={handleDownloadClick}>Download</button>
     </div>
     </>
  );
};

export default Contact;

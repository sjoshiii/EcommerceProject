import React from "react";
// import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <p className="text-xl font-medium mb-5">BEANS</p>
          <p className="w-full md:w-2/3 text-gray-600">
            At BEANS, we blend comfort, style, and sustainability to bring you clothing that feels as good as it looks.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+977 9818181818</li>
            <li>beans@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">&copy; 2025 BEANS. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

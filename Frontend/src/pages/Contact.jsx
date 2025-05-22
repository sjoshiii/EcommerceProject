import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        {/* <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="contact_img"
        /> */}

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl">Our Store</p>
          <p className="text-gray-500">
            Durbarmarg Road, Midtown Plaza, 2nd Floor <br />
            Kathmandu 44600, Nepal
          </p>
          <p className="text-gray-500">
            Tel: +977 9818181818 <br />
            Email: beans@gmail.com{" "}
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Beans
          </p>
          <p className="text-gray-500">
            Discover career opportunities and get to know the people behind our
            brand.
          </p>

          <button className="border border-white px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 ">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;

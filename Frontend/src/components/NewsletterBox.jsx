import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Sign up — 20% off inside!
      </p>

      <p className="text-2xl font-medium text-gray-800">
        Be the first to hear about new arrivals, exclusive offers, and style tips.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-md"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />

        <button 
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded-r-md"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;

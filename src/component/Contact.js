import { useState } from "react";
import { CONTACT_US_URL } from "../../utlis/contants";
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="relative">
        <img
          className=" h-auto mr-8 rounded-2xl  transform hover:scale-110 pulse transition-transform duration-500 ease-in-out"
          alt="contactUS-Image"
          src={CONTACT_US_URL}
        />
      </div>
      <div className="bg-gray-300 p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-6">Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="mt-1 p-2 border border-gray-300 rounded-md w-full text-xl"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="mt-1 p-2 border border-gray-300 rounded-md w-full text-xl"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="mt-1 p-2 border border-gray-300 rounded-md w-full text-xl"
            placeholder="Type your Message here..."
            required
          ></textarea>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-800"
            type="submit"
          >
            Submit
          </button>
          {message && (
            <span className="text-lg font-semibold text-blue-500 transition duration-300 ease-in-out hover:text-red-500 mr-3">
              Thanks for contacting Foodify, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

'use client';
export default function ContactForm() {
  return (
    <section className="conatiner mx-auto bg-white  md:p-6 md:flex">
      <div className="md:w-1/2 w-full p-4 lg:mt-4">
        <h2 className="text-3xl font-bold mb-4">Ready to <br /> Begin Your Journey?</h2>
        <p className="mb-6 text-gray-700">
          Get in touch with us today and take the first step towards your future success. Our team is here to assist you!
        </p>
        <div className="flex items-center mb-3 text-lg text-gray-800 lg:mt-10">
          <span className="mr-2">📞</span>
          +91 - XXX-XXXX
        </div>
        <div className="flex items-center text-lg text-gray-800">
          <span className="mr-2">📧</span>
          northstaracad@nsa.com
        </div>
      </div>
      <div className="md:w-1/2 w-full px-7  rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          Elevate Your <span className="text-red-600">Career Trajectory</span>
        </h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
          />

          <div className="grid grid-cols-2 gap-4">
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]">
              <option>Select Course</option>
            </select>
            <input
              type="text"
              placeholder="Ph. Number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]">
              <option>Select Your Type</option>
            </select>
            <input
              type="text"
              placeholder="Your City Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#F5F5F5]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition bg-[#F5F5F5]"
          >
            Register for free Webinar
          </button>

          <p className="text-xs text-gray-500 mb-2">
            By submitting, I authorize Northstar Academy & its representatives to contact me with updates and
            notifications via Email/SMS/WhatsApp/Call.
          </p>
        </form>
      </div>
    </section>
  );
}

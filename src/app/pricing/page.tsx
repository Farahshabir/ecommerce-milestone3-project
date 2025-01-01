"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/app/components/footer";

export default function Pricing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    {/* Main Wrapper Div */}
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 bg-white">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <h1 className="text-2xl font-bold text-black">Bandage</h1>
          <button
            className="sm:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 text-lg mt-4 sm:mt-0`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            <li>
              <Link href="/" className="hover:text-gray-400 text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-gray-400 text-black">
                Product
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-gray-400 text-black">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400 text-black">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden sm:flex items-center space-x-4 mt-4 sm:mt-0">
          <button className="text-[#23A6F0] font-medium">Login</button>
          <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded font-medium">
            Become a member
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto font-[sans-serif] p-4">
        <div className="text-center">
          <h2 className="text-gray-800 text-3xl font-bold">Pricing Plans</h2>
        </div>

        <div className="flex mx-auto bg-gray-100 rounded-full max-w-[250px] p-1 mt-8">
          <button className="text-white w-full text-sm bg-blue-500 py-2 px-4 rounded-full">
            Monthly
          </button>
          <button className="w-full text-sm py-2 px-4 rounded-full">
            Yearly
          </button>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8 max-lg:max-w-3xl max-md:max-w-sm max-lg:mx-auto">
          {/* Starter Plan */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden p-8">
            <div className="text-left">
              <h4 className="text-gray-800 font-semibold text-2xl">Starter</h4>
              <p className="text-gray-600 text-sm mt-2">Ideal for individuals.</p>
              <h3 className="text-gray-800 font-semibold text-2xl mt-4">
                $5.00<sub className="text-sm font-medium text-gray-600 ml-1">/ Month</sub>
              </h3>
              <button
                type="button"
                className="w-full mt-8 px-5 py-2.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-full"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-8">
              <h4 className="text-gray-800 font-semibold text-lg mb-4">Plan Included</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  50 Image generations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  500 Credits
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Customer Support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  50GB Cloud Storage
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden p-8">
            <div className="text-left">
              <h4 className="text-gray-800 font-semibold text-2xl">Pro</h4>
              <p className="text-gray-600 text-sm mt-2">Ideal for businesses.</p>
              <h3 className="text-gray-800 font-semibold text-2xl mt-4">
                $10.00<sub className="text-sm font-medium text-gray-600 ml-1">/ Month</sub>
              </h3>
              <button
                type="button"
                className="w-full mt-8 px-5 py-2.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-full"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-8">
              <h4 className="text-gray-800 font-semibold text-lg mb-4">Plan Included</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  100 Image generations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  1000 Credits
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  24/7 Customer Support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  100GB Cloud Storage
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden p-8">
            <div className="text-left">
              <h4 className="text-gray-800 font-semibold text-2xl">Enterprise</h4>
              <p className="text-gray-600 text-sm mt-2">Ideal for large businesses.</p>
              <h3 className="text-gray-800 font-semibold text-2xl mt-4">
                $20.00<sub className="text-sm font-medium text-gray-600 ml-1">/ Month</sub>
              </h3>
              <button
                type="button"
                className="w-full mt-8 px-5 py-2.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-full"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-8">
              <h4 className="text-gray-800 font-semibold text-lg mb-4">Plan Included</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  200 Image generations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  5000 Credits
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Priority Customer Support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Unlimited Cloud Storage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      </div>
    </>
  );
}

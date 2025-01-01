"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <>
      <header className="shadow-lg font-[sans-serif] tracking-wide relative z-50">
        <div id="collapseMenu" className="max-lg:hidden lg:!block">
          <ul className="lg:flex lg:items-center px-10 py-3 bg-[#333] min-h-[46px] gap-4">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 text-yellow-300 text-[15px] font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shops"
                className="hover:text-yellow-300 text-white text-[15px] font-medium"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-300 text-white text-[15px] font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-yellow-300 text-white text-[15px] font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-300 text-white text-[15px] font-medium"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className="hover:text-yellow-300 text-white text-[15px] font-medium"
              >
                Pages
              </Link>
            </li>
            <li className="max-lg:py-2 px-4 cursor-pointer">
              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 inline"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </header>
      <div className="font-sans bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
              Checkout
            </h2>
          </div>

          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-300">01</h3>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  Personal Details
                </h3>
              </div>

              <div className="md:col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First name"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last name"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email address"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Phone number"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-300">02</h3>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  Shopping Address
                </h3>
              </div>

              <div className="md:col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Street address"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="City"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="State"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Zip Code"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-300">03</h3>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  Payment method
                </h3>
              </div>

              <div className="md:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={handlePaymentMethodChange}
                    />
                    <label
                      htmlFor="card"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="card1"
                      />
                      <img
                        src="https://readymadeui.com/images/american-express.webp"
                        className="w-12"
                        alt="card2"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="card3"
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={handlePaymentMethodChange}
                    />
                    <label
                      htmlFor="paypal"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/paypal.webp"
                        className="w-20"
                        alt="paypalCard"
                      />
                    </label>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <div className="grid sm:grid-cols-4 gap-4 mt-4">
                    <div className="col-span-2">
                      <input
                        type="number"
                        placeholder="Card number"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="EXP."
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="CVV"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-4 mt-12">
              <button
                type="button"
                className="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100"
              >
                Pay later
              </button>
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Pay now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

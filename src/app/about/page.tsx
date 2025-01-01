"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import background from "@/app/images/background.png";
import videocard from "@/app/images/videocard.png";
import media1 from "@/app/images/media1.png";
import media2 from "@/app/images/media2.png";
import media3 from "@/app/images/media3.png";
import Footer from "@/app/components/footer";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
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

      {/* About Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start px-6 sm:px-10 lg:px-20">
        <div className="text-center sm:text-left mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            About Company
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            ABOUT US
          </h1>
          <p className="text-sm text-gray-600 mt-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded font-medium mt-8">
            Get Quote Now
          </button>
        </div>
        <div className="hidden sm:block mt-10 sm:mt-0">
          <Image src={background} alt="Background" className="w-full h-auto" />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-xl mx-auto mt-10 px-6 sm:px-10">
        <div className="text-center sm:text-left">
          <p className="text-[#E74040] text-sm">Problem trying</p>
          <h2 className="text-[#252B42] text-xl sm:text-2xl mt-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
          <p className="text-[#737373] text-sm sm:text-base mt-4">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
        <div className="bg-gray-50 p-8 min-h-[350px] flex flex-col items-center justify-center font-sans">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-lg:gap-12">
            <div className="text-center">
              <h3 className="text-gray-800 text-4xl font-extrabold">15K</h3>
              <p className="text-base font-bold mt-4">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-gray-800 text-4xl font-extrabold">150K</h3>
              <p className="text-base font-bold mt-4">Monthly Visitors</p>
            </div>
            <div className="text-center">
              <h3 className="text-gray-800 text-4xl font-extrabold">15K</h3>
              <p className="text-base font-bold mt-4">Countries Worldwide</p>
            </div>
            <div className="text-center">
              <h3 className="text-gray-800 text-4xl font-extrabold">100+</h3>
              <p className="text-base font-bold mt-4">Top Partners</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-6">
          <Image src={videocard} alt="Video Card" className="w-full sm:w-auto mt-4 sm:mt-0" />
        </div>
      </div>

      {/* Team Section */}
      <div className="font-[sans-serif] my-12 px-6 sm:px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center">
            <h2 className="text-gray-800 text-3xl sm:text-4xl font-extrabold">
              Meet our team
            </h2>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              Veniam proident aute magna anim excepteur et ex consectetur velit
              ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure
              laboris ad ut. Esse cupidatat deserunt magna aute.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[media1, media2, media3].map((media, index) => (
              <div key={index} className="border rounded-md overflow-hidden">
                <Image
                  src={media}
                  alt={`Team Member ${index + 1}`}
                  className="w-full h-60 object-contain bg-gray-200"
                />
                <div className="p-4 text-center">
                  <h4 className="text-gray-800 text-base font-bold">Username</h4>
                  <p className="text-gray-600 text-xs mt-1">Profession</p>
                  <div className="space-x-4 mt-4">
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#fff"
                        viewBox="0 0 155.139 155.139"
                      >
                        <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

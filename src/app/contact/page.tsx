import Link from "next/link";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import { PiArrowBendRightDownBold } from "react-icons/pi";

import hero from "@/app/images/hero.png";

export default function Contact() {
  return (
    <>
      <header className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 bg-white">
        <div className="text-black">
          <h1 className="text-xl sm:text-2xl font-bold">Bandage</h1>
        </div>
        <nav>
          <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 text-sm sm:text-lg">
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
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <button className="text-[#23A6F0] font-medium">Login</button>
          <button className="w-[180px] sm:w-[214px] h-[44px] sm:h-[52px] bg-blue-500 text-white rounded font-medium">
            Become a member
          </button>
        </div>
      </header>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 px-6 lg:px-20">
        {/* Left Section (Content) */}
        <div className="text-center lg:text-left lg:max-w-md">
          <p className="text-sm sm:text-lg font-semibold text-gray-600">
            CONTACT US
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold mt-2">
            Get in touch today!
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>
          <div className="mt-6">
            <p className="text-sm sm:text-base text-gray-700">
              Phone: +451 215 215
            </p>
            <p className="text-sm sm:text-base text-gray-700 mt-2">
              Fax: +451 215 215
            </p>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <FaTwitter className="text-gray-600 hover:text-blue-400" />
            <FaFacebookSquare className="text-gray-600 hover:text-blue-600" />
            <FaInstagram className="text-gray-600 hover:text-pink-400" />
            <FaLinkedin className="text-gray-600 hover:text-blue-700" />
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-[60%] mt-8 lg:mt-0 flex justify-center">
          <Image
            src={hero}
            alt="Hero Image"
            className="rounded-lg"
            layout="intrinsic"
            width={900}
            height={700}
            priority
          />
        </div>
      </div>

      <div>
        <div className="justify-self-center mb-6">
          <div>
            <p className="ml-32">VISIT OUR OFFICE</p>
          </div>
          <div className="justify-center">
            <h1 className="text-4xl text-[#252B42]">
              We help small businesses
            </h1>
          </div>
          <div className="justify-center">
            <h1 className="text-4xl text-[#252B42] ml-20">with big ideas</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[329px] h-[403px] pt-16">
            <div className="justify-self-center mt-1">
              <span className="text-[#23A6F0] text-6xl">
                <IoCallOutline />
              </span>
            </div>
            <div className="justify-self-center mt-1">
              <p>georgia.young@example.com</p>
            </div>
            <div className="justify-self-center">
              <p>georgia.young@ple.com</p>
            </div>
            <div className="justify-self-center">
              <p>Get Support</p>
            </div>
            <div className="justify-self-center mt-2">
              <button className="text-[#23A6F0] w-[193px] h-[54px] rounded-3xl border-solid border-2 border-[#23A6F0]">
                Submit Request
              </button>
            </div>
          </div>
          <div className="bg-[#252B42] w-[329px] h-[403px] pt-16">
            <div className="justify-self-center mt-1">
              <span className="text-[#23A6F0] text-6xl">
                <FaLocationDot />
              </span>
            </div>
            <div className="justify-self-center mt-1">
              <p>georgia.young@example.com</p>
            </div>
            <div className="justify-self-center">
              <p>georgia.young@ple.com</p>
            </div>
            <div className="justify-self-center">
              <p>Get Support</p>
            </div>
            <div className="justify-self-center mt-2">
              <button className="text-[#23A6F0] w-[193px] h-[54px] rounded-3xl border-solid border-2 border-[#23A6F0]">
                Submit Request
              </button>
            </div>
          </div>
          <div className="w-[329px] h-[403px] pt-16">
            <div className="justify-self-center mt-1">
              <span className="text-[#23A6F0] text-6xl">
                <FaEnvelope />
              </span>
            </div>
            <div className="justify-self-center mt-1">
              <p>georgia.young@example.com</p>
            </div>
            <div className="justify-self-center">
              <p>georgia.young@ple.com</p>
            </div>
            <div className="justify-self-center">
              <p>Get Support</p>
            </div>
            <div className="justify-self-center mt-2">
              <button className="text-[#23A6F0] w-[193px] h-[54px] rounded-3xl border-solid border-2 border-[#23A6F0]">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-self-center mt-6">
        <div className="justify-center ml-28">
          <span className="text-[#23A6F0] text-4xl">
            <PiArrowBendRightDownBold />
          </span>
        </div>
        <div className="ml-6">
          <p>WE CAN&apos;T WAIT TO MEET YOU</p>
        </div>
        <div className="ml-4">
          <h1 className="text-6xl">Let&apos;s Talk</h1>
        </div>
        <div className="w-[186px] h-[52px] bg-[#23A6F0] rounded-lg ml-10 mt-2">
          <button className="text-white py-2 px-8 ">Try it free now</button>
        </div>
      </div>

      <div>
        <div className="w-[1050px] h-[138px] pt-8 justify-self-center mt-8">
          <div>
            <h1 className="text-2xl font-bold">Bandage</h1>
          </div>
          <div className="flex float-right gap-4 -mt-5 ">
            <div>
              <span className="text-[#23A6F0] text-2xl">
                <FaFacebook />
              </span>
            </div>
            <div>
              <span className="text-[#23A6F0] text-2xl">
                <FaInstagram />
              </span>
            </div>
            <div>
              <span className="text-[#23A6F0] text-2xl">
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>
        <div className="pl-2 flex w-[1050px] h-[300px] pt-8 gap-10 justify-self-center">
          <div className="w-[148px] h-[170px]">
            <div>
              <h2 className="font-bold">Company Info</h2>
            </div>
            <div>
              <ul className="text-[#737373] leading-loose">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="w-[148px] h-[170px]">
            <div>
              <h2 className="font-bold">Legal</h2>
            </div>
            <div>
              <ul className="text-[#737373] leading-loose">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="w-[148px] h-[170px]">
            <div>
              <h2 className="font-bold">Features</h2>
            </div>
            <div>
              <ul className="text-[#737373] leading-loose">
                <li>Buiness Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
          </div>

          <div className="w-[148px] h-[170px]">
            <div>
              <h2 className="font-bold">Resources</h2>
            </div>
            <div>
              <ul className="text-[#737373] leading-loose">
                <li>IOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
          </div>

          <div className="w-[148px] h-[170px]">
            <div>
              <h2 className="font-bold">Get In Touch</h2>
            </div>

            <div className="w-[321px] h-[58px] ">
              <form action="#">
                <input
                  className="ltr h-[58px] w-[190px] bg-[#F9F9F9] text-[#737373] border border-[#E6E6E6]"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
                <button className="bg-[#23A6F0] text-[#FFFFFF] h-[58px] w-[90px] rounded-r-lg">
                  Subscribe
                </button>
              </form>
            </div>
            <div>
              <p className="text-[#737373] text-sm">Lorm imp sum doler Amit</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] text-[#737373] w-[1050px] h-[80px] pt-6 justify-self-center">
          <p>Made With Love By @Farah Shabir All Right Reserved</p>
        </div>
      </div>
    </>
  );
}

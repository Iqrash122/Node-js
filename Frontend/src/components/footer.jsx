import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-[#EEEFFB]">
      <footer className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between p-10 mt-20 rounded-lg gap-10">
          <div className="flex flex-col gap-5 max-w-xs">
            <p className="text-[38px] font-bold text-[#000000]">Hekto</p>

            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="px-4 py-2 flex-1 outline-none text-sm bg-white"
              />
              <button className="bg-[#FB2E86] text-white px-6 text-sm font-semibold hover:bg-[#d81e6d] transition">
                Sign Up
              </button>
            </div>

            <p className="text-[#8A8FB9] text-[16px] flex flex-col">
              Contact Info
              <span className="text-[#8A8FB9] text-[16px]">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-[22px] font-bold text-[#000000]">Categories</p>
            <ul className="flex flex-col gap-3">
              <li className="text-[#8A8FB9] text-[16px]">
                Laptops & Computers
              </li>
              <li className="text-[#8A8FB9] text-[16px]">
                Cameras & Photography
              </li>
              <li className="text-[#8A8FB9] text-[16px]">
                Smart Phones & Tablets
              </li>
              <li className="text-[#8A8FB9] text-[16px]">
                Video Games & Consoles
              </li>
              <li className="text-[#8A8FB9] text-[16px]">
                Waterproof Headphones
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-[22px] font-bold text-[#000000]">
              Customer Care
            </p>
            <ul className="flex flex-col gap-3">
              <li className="text-[#8A8FB9] text-[16px]">My Account</li>
              <li className="text-[#8A8FB9] text-[16px]">Discount</li>
              <li className="text-[#8A8FB9] text-[16px]">Returns</li>
              <li className="text-[#8A8FB9] text-[16px]">Orders History</li>
              <li className="text-[#8A8FB9] text-[16px]">Order Tracking</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-[22px] font-bold text-[#000000]">
              WooCommerce Pages
            </p>
            <ul className="flex flex-col gap-3">
              <li className="text-[#8A8FB9] text-[16px]">Blog</li>
              <li className="text-[#8A8FB9] text-[16px]">Browse the Shop</li>
              <li className="text-[#8A8FB9] text-[16px]">Category</li>
              <li className="text-[#8A8FB9] text-[16px]">Pre-Built Pages</li>
              <li className="text-[#8A8FB9] text-[16px]">
                Visual Composer Elements
              </li>
              <li className="text-[#8A8FB9] text-[16px]">WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-[#E7E4F8]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-48 py-4">
          <p className="text-[#8A8FB9] text-[16px]">
            ©SwiftSculpt - All Rights Reserved
          </p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="w-8 h-8 flex justify-center items-center rounded-full bg-[#151875]"
            >
              <ImFacebook className="text-white text-[14px]" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex justify-center items-center rounded-full bg-[#151875]"
            >
              <FaInstagram className="text-white text-[14px]" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex justify-center items-center rounded-full bg-[#151875]"
            >
              <BsTwitter className="text-white text-[14px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

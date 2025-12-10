import React from "react";
import { FiMail } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";


export default function TopBar() {
    return (
        <div className="w-full h-12 bg-[#7e33e0] flex items-center justify-center text-white font-bold text-lg">
            <div className="container flex justify-between items-center px-4">
                <div className="flex gap-15 left">
                    <div className="list flex flex-row gap-2 items-center cursor-pointer">
                        <FiMail />
                        <p className="font-normal text-[15px] hover:text-[#FB2E86]">swiftsculpt12@gmail.com</p>
                    </div>
                    <div className="list flex flex-row gap-2 items-center cursor-pointer">
                        <BiPhoneCall />
                        <p className="font-normal text-[15px] hover:text-[#FB2E86]">+92 3068518898</p>
                    </div>
                </div>
                <div className="right flex gap-4">
                    <select name="lang" id="" className="font-normal text-[15px] bg-[#7e33e0] outline-none cursor-pointer">
                        <option value="english">English</option>
                        <option value="urdu">Urdu</option>
                        <option value="russian">Russian</option>
                    </select>
                    <select name="lang" id="" className="font-normal text-[15px] bg-[#7e33e0] outline-none cursor-pointer">
                        <option value="usd">USD</option>
                        <option value="pkr">PKR</option>
                        <option value="euro">Euro</option>
                    </select>
                    <div className="flex flex-row gap-1 items-center cursor-pointer">
                        <p className="font-normal text-[15px]">Login</p>
                        <LuUserRound />
                    </div>
                    <div className="flex flex-row gap-1 items-center cursor-pointer">
                        <p className="font-normal text-[15px]">Wishlist</p>
                        <FaRegHeart />
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <PiShoppingCartBold />
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import { FiMail } from "react-icons/fi";
export default function TopBar() {
    return (
        <div className="w-full h-12 bg-[#7e33e0] flex items-center justify-center text-white font-bold text-lg">
            <div className="container flex justify-between items-center">
                <div className="list">
                    <FiMail />
                </div>
            </div>
        </div>
    )
}
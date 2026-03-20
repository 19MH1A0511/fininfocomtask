import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import LoginView from "./LoginView";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const handleIsOPen = () => {
        setIsOpen(true)
    };

    const handleIsClose =() => {
        setIsOpen(false);
    };

    return (
        <div className="w-full flex justify-center py-2 bg-[#f5f3ef]">

            <div className="w-[95%] max-w-6xl bg-white px-4 py-3 rounded-full shadow-sm flex justify-between items-center">

                {/* 🔹 MOBILE VIEW */}
                <div className="flex items-center justify-between w-full md:hidden">

                    {/* Left */}
                    <div className="flex items-center gap-2">
                        <HiMenu className="text-xl" />
                        <h1 className="font-semibold">Grafterr Food</h1>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                        <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-full hover:bg-orange-500 hover:text-white transition"
                        onClick={handleIsOPen}>
                            Login/Sign up
                        </button>
                    </div>

                </div>

                {/* 🔹 TABLET + DESKTOP VIEW */}
                <div className="hidden md:flex w-full justify-between items-center">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">

                        {/* Location */}
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                            <IoLocationOutline />
                            <span>42 currns drive • Now</span>
                        </div>

                        {/* Toggle */}
                        <div className="flex bg-gray-100 rounded-full p-1 text-sm">
                            <button className="px-4 py-1 rounded-full bg-white shadow">
                                Delivery
                            </button>
                            <button className="px-4 py-1 text-gray-500">
                                Pickup
                            </button>
                        </div>

                    </div>

                    {/* CENTER */}
                    <h1 className="text-lg font-semibold">Grafterr Food</h1>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">
                        <MdOutlineShoppingCart className="text-xl cursor-pointer" />

                        <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-full hover:bg-orange-500 hover:text-white transition"
                        onClick={handleIsOPen}>
                            Login/Sign up
                        </button>
                    </div>

                </div>
            </div>
            {isOpen && (
                <LoginView onClose ={handleIsClose}/>
            )}
        </div>
    );
};

export default NavBar;
import React from "react";
import CooktopiaShopLogo from "../assets/img/CooktopiaShop Logo.webp";
import Nav from "../component/ui/Nav";
import DarkMode from "../component/ui/DarkMode";

const NavBar = () => {
    return (
        <nav className="w-full shadow-md bg-beige-400">

            <div className="flex flex-col items-center justify-between px-4 py-3 mx-auto md:hidden max-w-7xl">
                <div className="flex flex-row items-center justify-between w-full gap-2">
                    
                    <img
                        src={CooktopiaShopLogo}
                        alt="CooktopiaShopLogo"
                        className="w-40 h-auto cursor-pointer invert"
                    />

                    <DarkMode />
                </div>

                <div className="">
                    <Nav
                        textColor="text-beige-950 transition-all duration-300 ease-out"
                        hoverColor="hover:text-stone-950"
                        bgColor="hover:bg-beige-100 transition-all duration-300 ease-out rounded-lg"
                        invertColor="invert"
                    />
                </div>

            </div>

            <div className="items-center justify-between hidden px-4 py-3 mx-auto md:flex max-w-7xl">
                <div className="flex items-center gap-2">
                    <img
                        src={CooktopiaShopLogo}
                        alt="CooktopiaShopLogo"
                        className="w-40 h-auto cursor-pointer invert"
                    />
                </div>

                <div className="flex ">
                    <Nav
                        textColor="text-beige-950 transition-all duration-300 ease-out"
                        hoverColor="hover:text-stone-950"
                        bgColor="hover:bg-beige-100 transition-all duration-300 ease-out rounded-lg"
                        invertColor="invert-0"
                    />
                </div>

                <div>
                    <DarkMode />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

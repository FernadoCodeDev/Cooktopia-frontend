import React from "react";
import CooktopiaShopLogo from "../assets/img/CooktopiaShop Logo.webp";
import CooktopiaShopBG from "../assets/img/CooktopiaShopBG.webp";
import MobileMenu from "../component/ui/MobileMenu";
import DarkMode from "../component/ui/DarkMode";

const Header = () => {
    return (
        <div className="relative w-full ">
            {/* Design less than 768px */}
            <div
                className="relative inset-0 flex flex-col w-full min-h-screen p-4 bg-center bg-cover md:hidden"
                style={{ backgroundImage: `url(${CooktopiaShopBG})` }}
            >
                <div className="relative z-10 flex flex-col justify-between h-screen pb-8">

                    <div className="flex flex-row justify-between gap-2 ">
                        <img
                            src={CooktopiaShopLogo}
                            alt="CooktopiaShopLogo"
                            className="object-contain w-32 h-auto cursor-pointer invert-0"
                        />
                        <div className="">
                            <DarkMode />
                        </div>
                    </div>

                    <div className="flex flex-col mx-auto">
                        <MobileMenu
                            textColor="text-beige-100 transition-all duration-900 ease-out"
                            hoverColor="hover:text-white"
                            bgColor="hover:bg-beige-100/10 transition-all duration-900 ease-out hover:backdrop-blur-[4px] rounded-lg"
                            invertColor="invert-0"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-1">

                        <h1 className="text-5xl font-bold text-center text-slate-100">
                            COCINA
                        </h1>

                        <p className="pt-2 text-sm text-start text-slate-100">
                            Descubre utensilios y herramientas que hacen que cocinar sea más fácil y rápido.

                        </p>

                        <h1 className="col-span-3 text-5xl font-bold text-center text-slate-100">
                            INTELIGENTE
                        </h1>

                    </div>

                </div>
            </div>

            {/* design greater than md */}
            <div className="hidden md:grid md:grid-cols-2 md:min-h-screen">
                {/* left side bg-beige-200 */}

                <div className="flex flex-col items-start justify-between p-6 bg-beige-200">
                    <div>
                        <img
                            src={CooktopiaShopLogo}
                            alt="CooktopiaShopLogo"
                            className="w-40 h-auto cursor-pointer invert"
                        />

                        <MobileMenu
                            textColor="text-beige-950 transition-all duration-900 ease-out"
                            hoverColor="hover:text-stone-950"
                            bgColor="hover:bg-beige-100 transition-all duration-900 ease-out rounded-lg"
                            invertColor="invert-0"
                        />

                    </div>
                    <div className="grid grid-cols-2 gap-1 max-w-[25rem]">

                        <h1 className="text-5xl font-bold text-center text-stone-950">
                            COCINA
                        </h1>

                        <p className="pt-2 text-sm text-start text-stone-950">
                            Descubre utensilios y herramientas que hacen que cocinar sea más fácil y rápido.

                        </p>

                        <h1 className="col-span-3 text-5xl font-bold text-center text-stone-950">
                            INTELIGENTE
                        </h1>

                    </div>
                </div>

                {/* right side bg-beige-900 with background image */}
                <div className="relative flex flex-col items-end justify-between p-6 text-white">
                    <div
                        className="absolute inset-0 w-full h-full bg-cover "
                        style={{ backgroundImage: `url(${CooktopiaShopBG})` }}
                    ></div>
                    <DarkMode />
                </div>
            </div>
        </div>
    );
};

export default Header;
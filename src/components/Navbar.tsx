import { CgClose } from "react-icons/cg";
import { useState } from "react";
import {
    FaFacebook,
    FaBars,
    FaTwitter,
    FaInstagram,
    FaGooglePlusG,
} from "react-icons/fa";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const HanldeNav = () => {
        setNav(!nav);
    };
    return (
        <header className="sticky z-50 top-0">
            <nav className=" flex min-h-[50px] items-center justify-between navbar md:px-4 absolute z-10 text-white w-full bg-black/40">
                <ol className="hidden md:flex  px-4 ">
                    <li className="nav-item  text-xl">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item  text-xl">
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li className="nav-item text-xl">
                        <a href="#about-us">About US</a>
                    </li>
                    <li className="nav-item text-xl">
                        <a href="#deals">Deals</a>
                    </li>
                    <li className="nav-item text-xl">
                        <a href="#contact-us">Contact Us</a>
                    </li>
                </ol>
                <ol className="flex">
                    <li className="socials  ">
                        <a className="" href="#">
                            <FaFacebook size={25} />
                        </a>
                    </li>
                    <li className="socials  ">
                        <a className="" href="#">
                            <FaTwitter size={25} />
                        </a>
                    </li>
                    <li className="socials  ">
                        <a className="" href="#">
                            <FaInstagram size={25} />
                        </a>
                    </li>
                    <li className="socials  ">
                        <a className="" href="#">
                            <FaGooglePlusG size={25} />
                        </a>
                    </li>
                </ol>
                {/* hamburger icon */}
                <div className="md:hidden z-10" onClick={HanldeNav}>
                    {!nav ? (
                        <FaBars
                            size={30}
                            className="mr-2 cursor-pointer hover:text-sky-500 active:text-sky-500"
                        />
                    ) : (
                        <CgClose
                            size={30}
                            className="hover:rotate-6 hover:text-sky-500 mr-2 cursor-pointer"
                        />
                    )}
                </div>

                {/* mobile menu */}
                <div
                    onClick={HanldeNav}
                    className={
                        nav
                            ? "w-full overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7"
                            : "absolute top-0 left-[-100%] h-screen ease-in duration-500"
                    }
                >
                    <ol className="h-full w-full text-center pt-12">
                        <li className="nav-item text-2xl py-8 ">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav-item text-2xl py-8 ">
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item text-2xl py-8 ">
                            <a href="#about-us">About US</a>
                        </li>
                        <li className="nav-item text-2xl py-8 ">
                            <a href="#deals">Deals</a>
                        </li>
                        <li className="nav-item text-2xl py-8 ">
                            <a href="#contact-us">Contact Us</a>
                        </li>
                    </ol>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

import {AiFillPhone,AiOutlineClockCircle } from "react-icons/ai";
import { FaUmbrellaBeach } from "react-icons/fa6";

const TopBar = () => {
    return (
        <div className="flex items-center justify-between px-4 py-1 w-full bg-white ">
            <div className="flex items-center ">
                <FaUmbrellaBeach size ={30} className="mr-2 text-sky-500" />
                <h1 className=" text-3xl font-bold text-gray-700 font-lobster">Travelday</h1>
            </div>
            <div className="flex items-center ">
                <div className="hidden md:flex items-center px-6">
                    <AiOutlineClockCircle size={20} className="mr-2 text-sky-500" ></AiOutlineClockCircle>
                    <p  className="text-gray-500 text-sm">9AM -5PM</p>
                </div>
                <div className="hidden md:flex items-center px-6">
                    <AiFillPhone size={20} className="mr-2 text-sky-500"></AiFillPhone>
                    <p className="text-gray-500 text-sm">+91 7218566898</p>
                </div>
                <button>Get A free Quote</button>

            </div>
        </div>
    )
}

export default TopBar
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-sky-800 to-sky-500 text-white xl:rounded-t-[200px] px-5 lg:px-20 md:rounded-t-[100px]  pt-5 ">
      <div className="max-w-[1140px] w-full py-6 m-auto p-4 ">
        <div className=" flex justify-around sm:justify-between sm:gap-8 gap-5  m-auto flex-wrap pb-3" >
          <div className="w-full md:max-w-[300px]  mb-3">
            <div className="flex items-center mb-8 ">
              <FaUmbrellaBeach size={40} className="mr-2 text-sky-500" />
              <h1 className=" text-3xl md:text-5xl font-bold text-white font-lobster">Travelday</h1>
            </div>
            <div className="flex gap-[1px] lg:gap-1  mb-3 ">
              <SiGooglemaps size={50}  className="mr-2  mt-[-10px] text-sky-500" />
              <p className="text-sm">House 3, 2nd Floor, Datta Krupa building, near Pilot Tailor, rail vihar spine road PCMC PUNE - 411033</p>
            </div>
            <div className="flex gap-[1px] lg:gap-1 mb-3 items-center ">
              <SiGmail size={20} className="mr-2 text-sky-500" />
              <p className="text-sm">nishantrajputa11@gmail.com</p>
            </div>
          </div>
          <div className="mb-4  md:w-[300px] w-full">
            <h2 className="font-semibold mb-3">About US</h2>
            <div className="w-full">
              <p className="text-sm text-gray-100">At travelday, our passion for travel fuels our commitment to
                providin  exceptional and tailored experiences for every adventurer. Founded on the belief
                that travel is more than just visiting destinations; it's about creating lifelong memories and
                embracing the diversity our world offers.</p>
            </div>
          </div>
          <div className="mb-4  md:w-[200px]  w-full ">
            <h2 className="font-semibold mb-3">Company</h2>
            <div className="flex-col flex text-sm ">
              <a className="my-1 hover:underline duration-300" href="#">Terms </a>
              <a className="my-1 hover:underline duration-300" href="#">Privacy </a>
              <a className="my-1 hover:underline duration-300" href="#">Cookies</a>
            </div>
          </div>
          <div className="mb-4  md:w-[200px]  w-full ">
            <h2 className="font-semibold mb-3">Usefull Links</h2>
            <div className="flex-col flex text-sm ">
              <a className="my-1 hover:underline duration-300" href="#">Terms </a>
              <a className="my-1 hover:underline duration-300" href="#">Privacy </a>
              <a className="my-1 hover:underline duration-300" href="#">Cookies</a>
            </div>
          </div>
        </div>
        <div className=" m-auto ">
          <p className="text-gray-100 justify-center flex items-center">Made with lo<FaHeart className="mx-[1px] text-red-500" /> e by <span className="text-white font-normal font-lobster mx-1 tracking-wider"> Nishant </span> Rajput</p>
          <div className="flex pt-3 justify-between text-gray-100" >
            <p>© 2024 Travelday</p>
            <div className="">
              <a className="hover:underline duration-300 mr-1 border-e-2 px-1" href="#">Terms </a>
              <a className="hover:underline duration-300 mr-1 border-e-2 px-1" href="#">Privacy </a>
              <a className="hover:underline duration-300 mr-1 " href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Footer
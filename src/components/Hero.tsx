import hero from "../assets/h1.jpg";
import { FaUmbrellaBeach } from "react-icons/fa6";
const Hero = () => {
    return (
        <div className="w-full h-[100vh] text-white relative ">
            <img className=" w-full h-full object-cover " src={hero} alt="....hero img......" />
            <div className="m-auto  ">
                <div className="absolute bg-black/40 top-[20%]  max-w-[800px] md:p-10 p-4 w-full md:top-[20%]" >
                    <h1 className="md:text-6xl text-4xl font-bold">Explore. Experience. Embrace the World</h1>
                    <h2 className="md:text-4xl flex items-center text-3xl py-4 italic font-lobster tracking-wider">With <span className="px-3"> <FaUmbrellaBeach className="text-sky-400" /></span>Travelday</h2>
                    <p className="text-white text-sm">
                    Dive into our handpicked selection of destinations that encapsulate the essence of wanderlust. 
                    From the sun-kissed shores of tropical paradises to the awe-inspiring vistas of majestic mountains 
                    and the bustling energy of vibrant cities, our catalog offers a diverse array of locales waiting to 
                    be explored
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;

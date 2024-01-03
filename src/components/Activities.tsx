// import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
// import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";

import g8 from "../assets/gallery/g8.jpg";
import g9 from "../assets/gallery/g9.jpg";



const Activities = () => {
    return (
        <div className="max-w-[1140px] m-auto md:mt-[-100px] mt-[-150px] " id="deals">
            <div className=" md:flex">
                <div className="mb-6  w-full  relative p-4">
                    <h3 className="absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl tracking-wider font-bold drop-shadow-lg text-white  font-lobster">Resorts</h3>
                    <img className="w-full relative h-full border-4 shadow-lg border-white object-cover" src={g2} alt="g2" />
                </div>
                <div className="mb-6  w-full relative p-4 ">
                    <h3 className="absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl tracking-wider font-bold drop-shadow-lg text-white  font-lobster">Resorts</h3>
                    <img className="w-full relative h-full border-4 shadow-lg border-white object-cover" src={g5} alt="g5" />
                </div>

                <div className="mb-6  w-full  relative p-4">
                    <h3 className="absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl tracking-wider font-bold drop-shadow-lg text-white  font-lobster">Resorts</h3>
                    <img className="w-full relative h-full border-4 shadow-lg border-white object-cover" src={g9} alt="g3" />
                </div>
            </div>
            <div className="md:flex">
                <div className="mb-6  w-full  relative p-4">
                    <h3 className="absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl tracking-wider font-bold drop-shadow-lg text-white  font-lobster">Resorts</h3>
                    <img className="w-full relative h-full border-4 shadow-lg border-white object-cover" src={g4} alt="g4" />
                </div>
                <div className="mb-6  w-full  relative p-4">
                    <h3 className="absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl tracking-wider font-bold drop-shadow-lg text-white  font-lobster">Resorts</h3>
                    <img className="w-full relative h-full border-4 shadow-lg border-white object-cover" src={g8} alt="g1" />
                </div>

                <div className="mb-6  w-full  relative p-4">
                    <h3 className="absolute top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl tracking-wider font-bold drop-shadow-lg text-white  font-lobster">Resorts</h3>
                    <img className="w-full relative h-full border-4 shadow-lg border-white object-cover" src={g6} alt="g6" />
                </div>
            </div>

        </div>


    )
}

export default Activities
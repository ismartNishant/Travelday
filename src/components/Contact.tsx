// import a2  from "../assets/gallery/a2.jpg";
import a8  from "../assets/gallery/a8.jpg"; 


const Contact = () => {
    return (
        <div className="max-w-[1140px] w-full m-auto px-4 py-16" id="contact-us">
            <h2 className="text-5xl font-lobster text-center  mb-4"> Contact </h2>
            <div>
                <h2 className=" text-gray-700 md:text-start text-center  text-2xl px-4 py-1">Send us Message</h2>
                <p className="text-gray-500 text-center py-1 px-4">We're standing by!</p>
            </div>
            <div className="grid md:grid-cols-2">
                <img className="w-full p-2  h-[200px] max-h-[500px] md:h-full object-cover" src={a8}  alt="....img...."/>
                <form>
                    <div className="grid grid-cols-2">
                        <input className="p-2 m-2 border"  type="text" placeholder="First.." />
                        <input className="p-2 m-2 border" type="text" placeholder="Last.." />
                        <input className="p-2 m-2 border" type="email" placeholder="Email.." />
                        <input className="p-2 m-2 border" type="tel" placeholder="Phone.." />
                        <input className="p-2 m-2 border col-span-2" type="text" placeholder="Address.." />
                        <textarea className="p-2 m-2 border col-span-2" placeholder="Type your message here..." cols={30} rows={10}></textarea>
                        <button className="col-span-2 m-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
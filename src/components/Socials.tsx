
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaGooglePlusG
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="absolute right-0 bottom-0 ">
        <ol className="bg-sky-50">
            <li className="socials "><a className="text-sky-600" href="#"><FaFacebook size={20}  /></a></li>
            <li className="socials "><a className="text-sky-600" href="#"><FaTwitter  size={20}/></a></li>
            <li className="socials "><a className="text-sky-600" href="#"><FaInstagram size={20} /></a></li>
            <li className="socials "><a className="text-sky-600" href="#"><FaGooglePlusG  size={20} /></a></li>
        </ol>
    </div>  
  )
}

export default Socials
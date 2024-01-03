
import a4 from '../assets/gallery/a4.jpg';
import a3 from '../assets/gallery/a3.jpg';
import a6 from '../assets/gallery/a6.jpg';
import a1 from '../assets/gallery/a1.jpg';
import g1 from "../assets/gallery/g1.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g6 from "../assets/gallery/g6.jpg";



const Gallery = () => {
  return (
    <div className="max-w-[1140px] w-full p-4 md:py-16 m-auto" id="gallery">
      <h2 className='text-center font-lobster p-4 text-5xl mb-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-2 col-span-2 row-span-3'>
          <img className='object-cover w-full h-full' src={g1} alt='..img...' />
        </div>
        <div>
          <img className='object-cover w-full h-full' src={a3} alt='..img...' />
        </div> 
        <div>
          <img className='object-cover w-full h-full' src={g6} alt='..img...' />
        </div> 
        <div>
          <img className='object-cover w-full h-full' src={a1} alt='..img...' />
        </div> 
        <div>
          <img className='object-cover w-full h-full' src={a4} alt='..img...' />
        </div> 
        <div className='col-span-2 row-span-2 s'>
          <img className='object-cover w-full h-full' src={a6} alt='..img...' />
        </div>
        <div className='col-span-2 sm:col-span-1'>
          <img className='object-cover w-full h-full' src={g3} alt='..img...' />
        </div>
     
    
       
      </div>
    </div>
  )
}

export default Gallery


const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] w-full p-4 m-auto">
      <form className="lg:flex lg:justify-between w-full  items-center">
        <div className="flex flex-col py-2 my-2">
          <label >Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2 cursor-pointer">
            <option className="md:text-xl  bg-sky-400">Maldives</option>
            <option className="md:text-xl  bg-sky-400">Goa</option>
            <option className="md:text-xl  bg-sky-400">Kerla</option>
            <option className="md:text-xl  bg-sky-400">Alibaug</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full my-2 p-2 lg:max-w-[250px]">
            <label>Check In</label>
            <input className="border p-2 rounded-md" type="date"></input>
          </div>
          <div className="flex flex-col w-full my-2 p-2 lg:max-w-[250px]">
            <label>Check Out</label>
            <input className="border p-2 rounded-md" type="date"></input>
          </div>
        </div>
        <div className="flex flex-col w-full my-2 p-2 ">
          <label>Search</label>
          <button> Rates & Availabilities</button>
        </div>
      </form>
    </div>
  )
}

export default Booking
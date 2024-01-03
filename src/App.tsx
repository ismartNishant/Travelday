import "./App.css";
import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";

export default function App() {
  return (
    <div className="relative">
      <div className="fixed top-0 w-full z-20">
        <TopBar />
        <Navbar />
      </div>
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

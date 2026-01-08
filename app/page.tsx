import Image from "next/image";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Bio from "./_components/bio";
import Services from "./_components/services";
import Reviews from "./_components/reviews";
import Footer from "./_components/footer";
import Ubicacion from "./_components/ubicación";

export default function Home() {
  return (
    <div>
      <div className="h-screen"> 
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    <Bio></Bio>
    <Services></Services>
    <Reviews></Reviews>
    <Ubicacion></Ubicacion>
    <Footer></Footer>
    </div>
  );
}

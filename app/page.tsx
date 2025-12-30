import Image from "next/image";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Bio from "./_components/bio";
import Services from "./_components/services";
import Reviews from "./_components/reviews";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="min-w-screen bg-zinc-50 font-sans">
      <div className=""> 
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    <Bio></Bio>
    <Services></Services>
    <Reviews></Reviews>
    <Footer></Footer>
    </div>
  );
}

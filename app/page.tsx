import Image from "next/image";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Bio from "./_components/bio";
import Services from "./_components/services";
import Reviews from "./_components/reviews";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <Navbar></Navbar>
    <Hero></Hero>
    <Bio></Bio>
    <Services></Services>
    <Reviews></Reviews>
    <Footer></Footer>
    </div>
  );
}

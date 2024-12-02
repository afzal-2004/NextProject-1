import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/ui/hero";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <Hero />
      </div>

      <Footer />
    </>
  );
}

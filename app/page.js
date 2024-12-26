import { Announcement } from "@/components/ui/anouncement";
import { Footer } from "@/components/ui/footer";
import { Herosection } from "@/components/ui/herosection";
import { Navigbar } from "@/components/ui/navbar";
import OurExpertise from "@/components/ui/ourexpertise";
import { Quote } from "@/components/ui/quote";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
    <div key="navbarparent" className="w-full">
      <Navigbar />
    </div>
    <div className="flex-grow">
      <Herosection />
    </div>
    <div className="mb-10 px-10 sm:w-1/2">
    <Quote/>
    </div>
    <OurExpertise/>
    {/* <TechnologiesWeUse/> */}
    <Footer/>
  </div>
  );
}

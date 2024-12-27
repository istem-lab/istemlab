"use client"
import { Announcement } from "@/components/ui/anouncement";
import { Herosection } from "@/components/ui/herosection";
import { Navigbar } from "@/components/ui/navbar";
import Image from "next/image";
import ContactForm from "./contact";
import { Footer } from "@/components/ui/footer";
import { ContactProvider } from "./ContactContext";
export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
    <div key="navbarparent" className="w-full">
      <Navigbar />
    </div>
    <div className="w-full">
    <ContactProvider>
    <ContactForm/>
    </ContactProvider>
    </div>
  </div>
  <Footer/>
  </>
  );
}

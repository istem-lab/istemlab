"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
];

export function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <CardContent className="p-0 relative">
        <div className="relative h-[400px] w-full">
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Slide ${index + 1}`}
              width={400}
              height={400}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
        </div>
      </CardContent>
    </Card>
  );
}

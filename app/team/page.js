'use client';

import { useState, useEffect } from 'react';
import TeamMemberCard from './TeamMemberCard';
import { Navigbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';


const teamMembers = [
  {
    name: "Er.Nischal Acharya",
    role: "CEO/Data Engineer",
    image: "images/team/Nischal.jpg",
    quote: "Nischal Acharya"
  },
  {
    name: "Er.Sagar Rana",
    role: "GeoAI/Data analyst",
    image: "images/team/sagar.jpg",
    quote: "The best way to predict the future is to invent it."
  },
  {
    name: "Er.Jeshan pokharel",
    role: "Team Lead/GeoAI",
    image: "images/team/jeshan.jpg",
    quote: "Design is not just what it looks like and feels like. Design is how it works."
  },
  {
    name: "Suman Baral",
    role: "Strategy Officer",
    image: "images/team/suman.jpg",
    quote: "The best marketing doesn't feel like marketing."
  },
  {
    name: "Arun Bista",
    role: "COO",
    image: "images/team/arun.jpg",
    quote: "Make every detail perfect and limit the number of details to perfect."
  },
  {
    name: "Santoshi Magar",
    role: "Inern Devops",
    image: "images/team/santoshi.jpg",
    quote: "Make every detail perfect and limit the number of details to perfect."
  },
  {
    name: "Nitu Joshi",
    role: "Inern Frontend",
    image: "images/team/nitu.jpg",
    quote: "Make every detail perfect and limit the number of details to perfect."
  },
  {
    name: "Shreya Khatri",
    role: "Inern Backend",
    image: "images/team/shreya.jpg",
    quote: "Make every detail perfect and limit the number of details to perfect."
  },
];

export default function TeamPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Navigbar/>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="absolute inset-0 bg-grid-primary/[0.03] -z-10" />
        <div className="container mx-auto py-16 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 mb-2">OUR TEAM</h1>
            <p className="text-xl text-gray-500 mb-6 pb-5">
              Our team consists of young graduates, experienced professionals, and advisors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
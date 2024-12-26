'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';
import { Navigbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';


const teamMembers = [
  {
    name: "Nischal Acharya",
    role: "CEO",
    image: "/placeholder.svg?height=200&width=200",
    quote: "Innovation distinguishes between a leader and a follower."
  },
  {
    name: "Sagar Rana",
    role: "CTO",
    image: "/placeholder.svg?height=200&width=200",
    quote: "The best way to predict the future is to invent it."
  },
  {
    name: "Jeshan pokharel",
    role: "Lead Designer",
    image: "/placeholder.svg?height=200&width=200",
    quote: "Design is not just what it looks like and feels like. Design is how it works."
  },
  {
    name: "Suman Baral",
    role: "Marketing Director",
    image: "/placeholder.svg?height=200&width=200",
    quote: "The best marketing doesn't feel like marketing."
  },
  {
    name: "Arun Bista",
    role: "Product Manager",
    image: "/placeholder.svg?height=200&width=200",
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
      <div 
        className="absolute inset-0 bg-grid-primary/[0.03] -z-10"
      />
      <div className="container mx-auto py-16 px-4">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          OUR TEAM
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
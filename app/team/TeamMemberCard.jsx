'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function TeamMemberCard({ name, role, image, quote }) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <Card 
        className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6">
          <div className="relative">
            <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary shadow-md">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <motion.div 
              className="text-center"
              animate={{ y: isHovered ? -10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-muted-foreground">{role}</p>
            </motion.div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-90 text-primary-foreground rounded-lg p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="mt-6 border-l-2 pl-6 italic">
              &quot;{quote}&quot;
            </blockquote>
              {/* <p className="text-center text-sm">&quot;{quote}&quot;</p> */}
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default TeamMemberCard;

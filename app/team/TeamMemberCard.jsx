'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

function TeamMemberCard({ name, role, image }) {
  return (
    <Card className="rounded-full w-full max-w-xs flex flex-col items-center border-0 shadow-none bg-transparent">
      <CardContent className="flex flex-col items-center p-4 bg-transparent">
        <Avatar className="w-13 h-13 mb-3 rounded-full overflow-hidden">
          <AvatarImage src={image} alt={name} />
        </Avatar>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
      </CardContent>
    </Card>
  );
}

export default TeamMemberCard;
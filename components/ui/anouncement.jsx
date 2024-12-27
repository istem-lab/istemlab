"use client";

import { useState, useEffect } from "react";

const announcements = [
  { text: "Seeking for advisors.", link: "/advisors" },
  // { text: "Join our team now!", link: "/apply" },
];

const Announcement = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const { text, link } = announcements[currentAnnouncement];

  return (
    <div className="mx-auto max-w-2xl">
  <div className="sm:mb-8 sm:flex sm:justify-start">
    <div className="inline-block rounded-full px-4 py-2 text-sm text-gray-600 border-2 border-primary-500 transition-all duration-300 hover:border-primary-700">
      {text}{" "}
      <a href={link} className="font-semibold text-primary-700 hover:text-primary-900">
        <span className="absolute inset-0" aria-hidden="true" />
        Learn More <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </div>
</div>
  );
};

export { Announcement };

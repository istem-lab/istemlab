"use client";

import { motion } from "framer-motion";

// Define grid points for the map
const gridPoints = [
  { x: 100, y: 100 },
  { x: 300, y: 100 },
  { x: 500, y: 100 },
  { x: 700, y: 100 },
  { x: 100, y: 300 },
  { x: 300, y: 300 },
  { x: 500, y: 300 },
  { x: 700, y: 300 },
  { x: 100, y: 500 },
  { x: 300, y: 500 },
  { x: 500, y: 500 },
  { x: 700, y: 500 },
];

// Define roads (connections between points)
const roads = [
  // Horizontal roads
  { start: gridPoints[0], end: gridPoints[1] },
  { start: gridPoints[1], end: gridPoints[2] },
  { start: gridPoints[2], end: gridPoints[3] },
  { start: gridPoints[4], end: gridPoints[5] },
  { start: gridPoints[5], end: gridPoints[6] },
  { start: gridPoints[6], end: gridPoints[7] },
  { start: gridPoints[8], end: gridPoints[9] },
  { start: gridPoints[9], end: gridPoints[10] },
  { start: gridPoints[10], end: gridPoints[11] },

  // Vertical roads
  { start: gridPoints[0], end: gridPoints[4] },
  { start: gridPoints[4], end: gridPoints[8] },
  { start: gridPoints[1], end: gridPoints[5] },
  { start: gridPoints[5], end: gridPoints[9] },
  { start: gridPoints[2], end: gridPoints[6] },
  { start: gridPoints[6], end: gridPoints[10] },
  { start: gridPoints[3], end: gridPoints[7] },
  { start: gridPoints[7], end: gridPoints[11] },
];

// Define structures (plots)
const structures = [
  { x: 120, y: 120, width: 160, height: 160 },
  { x: 320, y: 120, width: 160, height: 160 },
  { x: 520, y: 120, width: 160, height: 160 },
  { x: 120, y: 320, width: 160, height: 160 },
  { x: 320, y: 320, width: 160, height: 160 },
  { x: 520, y: 320, width: 160, height: 160 },
];

const GeoAIPage = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">GeoAI Map Simulation</h1>
      <div className="relative w-[900px] h-[600px] bg-white border border-gray-300 rounded-lg">
        <svg
          width="900"
          height="600"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0"
        >
          {/* Points */}
          {gridPoints.map((point, index) => (
            <motion.circle
              key={`point-${index}`}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="black"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Points appear sequentially
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Roads */}
          {roads.map((road, index) => (
            <motion.line
              key={`road-${index}`}
              x1={road.start.x}
              y1={road.start.y}
              x2={road.end.x}
              y2={road.end.y}
              stroke="black"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                delay: 1 + index * 0.1, // Roads appear after points
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Structures (Plots) */}
          {structures.map((structure, index) => (
            <motion.rect
              key={`structure-${index}`}
              x={structure.x}
              y={structure.y}
              width={structure.width}
              height={structure.height}
              fill="none"
              stroke="blue"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                delay: 2 + index * 0.2, // Structures appear after roads
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>
      <p className="text-gray-700 mt-6 max-w-3xl text-center">
        GeoAI dynamically visualizes map planning with points, connecting roads, and structured plots. This simulation demonstrates real-time infrastructure development.
      </p>
    </div>
  );
};

// export default GeoAIPage;

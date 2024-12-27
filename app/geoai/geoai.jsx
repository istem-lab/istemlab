"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Size canvas to its parent
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    function handleResize() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    window.addEventListener("resize", handleResize);

    // Rotation variables
    let animationId;
    let angle = 0;
    let isPaused = false; // We'll pause rotation when a popup is generated

    // Make the globe smaller by using 0.3 instead of 0.45
    const radius = Math.min(canvas.width, canvas.height) * 0.3;

    // Points data structure
    const points = [];

    // Example messages
    const messages = [
     
    ];

    // Generate a new random point every 5 seconds
    const generateInterval = setInterval(() => {
      // Create a random lat/lon
      const lat = -90 + Math.random() * 180;  // [-90, 90]
      const lon = -180 + Math.random() * 360; // [-180, 180]
      const message = messages[Math.floor(Math.random() * messages.length)];

      // Push a new popup into our points array
      points.push({
        lat,
        lon,
        message,
        alpha: 1, // fade-out factor
        maxSize: 8 + Math.random() * 6, // a slightly larger range
      });

      // ---- Pause rotation for 2 seconds whenever a new popup appears ----
      isPaused = false;
      setTimeout(() => {
        isPaused = false;
      }, 2000);

    }, 5000); // 5 seconds

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw rotating globe
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      drawGlobe(ctx, angle, radius);
      // drawPoints(ctx, angle, radius, points);
      ctx.restore();

      // Only rotate if not paused
      if (!isPaused) {
        angle += 0.0025;
      }

      // Fade out old points
      for (let i = points.length - 1; i >= 0; i--) {
        points[i].alpha -= 0.008; // fade speed
        if (points[i].alpha <= 0) {
          points.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(animate);
    }
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      clearInterval(generateInterval);
    };
  }, []);

  // Draw wireframe latitude & longitude lines
  function drawGlobe(ctx, angle, radius) {
    ctx.strokeStyle = "var(--color-secondary)";
    ctx.lineWidth = 1;

    // Lines of latitude
    for (let lat = -80; lat <= 80; lat += 20) {
      ctx.beginPath();
      for (let lon = -180; lon <= 180; lon += 10) {
        const { x, y } = projectPoint(lat, lon, angle, radius);
        if (lon === -180) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    // Lines of longitude
    for (let lon = -180; lon <= 180; lon += 20) {
      ctx.beginPath();
      for (let lat = -90; lat <= 90; lat += 10) {
        const { x, y } = projectPoint(lat, lon, angle, radius);
        if (lat === -90) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }
  }

  // Draw pulsing points + text
  // function drawPoints(ctx, angle, radius, points) {
  //   points.forEach((p) => {
  //     const { x, y } = projectPoint(p.lat, p.lon, angle, radius);

  //     // Pulse circle (in bright red)
  //     ctx.save();
  //     ctx.translate(x, y);
  //     ctx.fillStyle = `rgba(255, 0, 0, ${p.alpha})`;
  //     const size = p.maxSize * (1 - (1 - p.alpha) ** 2);
  //     ctx.beginPath();
  //     ctx.arc(0, 0, size, 0, 2 * Math.PI);
  //     ctx.fill();
  //     ctx.restore();

  //     // Draw text (in black) slightly offset above the circle
  //     ctx.save();
  //     ctx.translate(x, y - (size + 10));
  //     ctx.fillStyle = `rgba(0, 0, 0, ${Math.min(p.alpha + 0.2, 1)})`;
  //     ctx.font = "8px sm:16px";
  //     ctx.textAlign = "center";
  //     ctx.fillText(p.message, 0, 0);
  //     ctx.restore();
  //   });
  // }

  // Converts lat/lon to 2D coords with rotation around Y-axis
  function projectPoint(lat, lon, angle, radius) {
    const phi = (lat * Math.PI) / 180;
    const theta = (lon * Math.PI) / 180;

    // Spherical -> Cartesian (3D)
    const x = radius * Math.cos(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi);
    const z = radius * Math.cos(phi) * Math.sin(theta);

    // Rotate around Y-axis
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const xRot = x * cosA - z * sinA;
    // We don't need zRot for orthographic projection

    return { x: xRot, y };
  }

  return (
    // Responsive layout:
    // - On small screens (default), stack vertically (flex-col).
    // - On md+ screens, place side-by-side (flex-row).
    <section className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-background">
      {/* Left side (Canvas Container) */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          // style={{ backgroundColor: "transparent" }}
        />
      </div>

      {/* Right side (Hero Text) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8">
      <h1 className="max-w-2xl mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
  <span className="relative group">
    BINDU
    <span className="absolute left-0 -bottom-1.5 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
  </span>
</h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        An innovative full-stack GeoAI solution powered by advanced data engines and adaptive feedback systems, delivering effective and computationally efficient solutions to complex geospatial challenges across the entire data lifecycle.
        </p>
      </div>
    </section>
  );
}

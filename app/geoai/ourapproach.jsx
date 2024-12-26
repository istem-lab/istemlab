"use client";

import React from "react";
import {
  FaDatabase,
  FaCog,
  FaRobot,
  FaCheckCircle,
  FaComments,
  FaSyncAlt,
  FaServer,
} from "react-icons/fa";
import { Separator } from "@/components/ui/separator"
export default function OurApproach() {
  // Define the steps in your approach.
  const steps = [
    {
      title: "Data from Different Sources",
      content:
        "We gather data from various sources — sensors, APIs, user inputs, satellite imagery, and more.",
      icon: <FaDatabase size={28} className="text-primary" />,
    },
    {
      title: "AI Powered Data Engine",
      content:
        "Our engine not only refines and cleans the data but also gathers data from various sources and integrates new data directly into our data portal and server for real-time processing.",
      icon: <FaCog size={28} className="text-primary" />,
    },
    {
      title: "AI Model",
      content:
        "We run advanced AI models that extract insights, detect patterns, and generate predictions from the unified data.",
      icon: <FaRobot size={28} className="text-primary" />,
    },
    {
      title: "Result",
      content:
        "The system produces actionable results, displayed in dashboards, applications, or integrated into workflows.",
      icon: <FaCheckCircle size={28} className="text-primary" />,
    },
    {
      title: "Feedback System",
      content:
        "Users and automated systems provide feedback, ensuring continuous improvement by highlighting areas for recalibration.",
      icon: <FaComments size={28} className="text-primary" />,
    },
    {
      title: "Improving Model",
      content:
        "Based on feedback and new data, the AI model is continuously refined for better accuracy and reliability.",
      icon: <FaSyncAlt size={28} className="text-primary" />,
    },
    {
      title: "Improving Data",
      content:
        "Data is consistently monitored and improved to ensure completeness, accuracy, and readiness for future AI-driven tasks.",
      icon: <FaServer size={28} className="text-primary" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      {/* Title and subtitle, centered */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR APPROACH</h2>
        <p className="text-gray-600">
          A step-by-step process ensuring continuous improvement in data-driven
          solutions and AI model performance.
        </p>
      </div>

      {/* Steps container */}
      <div className="max-w-5xl mx-auto flex flex-col space-y-16 md:space-y-20">
        {steps.map((step, idx) => {
          // Determine layout: even index => left image, right text. odd index => right image, left text.
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`
                flex flex-col items-center text-center md:text-left 
                ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                md:items-start
              `}
            >
              {/* Icon / Visual block */}
              <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                <div className="p-6 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
                  {step.icon}
                </div>
              </div>

              {/* Text block */}
              <div className="md:w-1/2 md:px-10">
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

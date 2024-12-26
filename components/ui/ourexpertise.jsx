"use client";

import React from "react";
import {
  FaBrain,
  FaCogs,
  FaRobot,
  FaChartBar,
  FaPalette,
  FaDatabase,
  FaProjectDiagram,
  FaTools,
  FaRocket,
  FaEye,
  FaLaptopCode,
  FaPuzzlePiece,
  FaGlobe,
  FaCamera,
  FaLightbulb,
  FaMobileAlt,
  FaLayerGroup,
} from "react-icons/fa";

export default function OurExpertise() {
  // Define the areas of expertise.
  const expertise = [
    {
      title: "Machine Learning",
      content:
        "Designing and training advanced algorithms to uncover patterns and insights from data, enabling intelligent decision-making.",
      icon: <FaBrain size={28} className="text-primary" />,
    },
    {
      title: "Feature Engineering",
      content:
        "Transforming raw data into meaningful features that enhance model accuracy and performance.",
      icon: <FaLayerGroup size={28} className="text-primary" />,
    },
    {
      title: "Deep Learning",
      content:
        "Leveraging neural networks to solve complex problems in vision, speech, and more with state-of-the-art accuracy.",
      icon: <FaCogs size={28} className="text-primary" />,
    },
    {
      title: "Large Language Models (LLMs)",
      content:
        "Harnessing the power of LLMs for natural language understanding, summarization, and conversational AI.",
      icon: <FaRobot size={28} className="text-primary" />,
    },
    {
      title: "Generative AI",
      content:
        "Creating innovative solutions with generative models for image synthesis, content generation, and more.",
      icon: <FaPalette size={28} className="text-primary" />,
    },
    {
      title: "Data Analysis",
      content:
        "Uncovering actionable insights from structured and unstructured data through statistical and exploratory techniques.",
      icon: <FaChartBar size={28} className="text-primary" />,
    },
    {
      title: "Data Visualization",
      content:
        "Transforming complex datasets into intuitive and impactful visual representations for informed decision-making.",
      icon: <FaDatabase size={28} className="text-primary" />,
    },
    {
      title: "GIS (Geographic Information Systems)",
      content:
        "Harnessing spatial data to create, analyze, and interpret geospatial patterns, enabling informed decision-making.",
      icon: <FaGlobe size={28} className="text-primary" />,
    },
    // {
    //   title: "Photogrammetry",
    //   content:
    //     "Transforming images into accurate 3D models and maps, revolutionizing data visualization and analysis.",
    //   icon: <FaCamera size={28} className="text-primary" />,
    // },
    // {
    //   title: "Lidar",
    //   content:
    //     "Utilizing advanced Lidar technology for high-resolution mapping and precise geospatial data acquisition.",
    //   icon: <FaLightbulb size={28} className="text-primary" />,
    // },
    {
      title: "Data Modeling",
      content:
        "Designing and structuring data to represent real-world scenarios effectively, enabling accurate and actionable insights.",
      icon: <FaProjectDiagram size={28} className="text-primary" />,
    },
    {
      title: "Data Engineering",
      content:
        "Building robust pipelines to gather, process, and store data efficiently, ensuring seamless integration across platforms.",
      icon: <FaTools size={28} className="text-primary" />,
    },
    {
      title: "Model Deployment",
      content:
        "Implementing AI models in real-world systems with scalable and efficient solutions for production-ready performance.",
      icon: <FaRocket size={28} className="text-primary" />,
    },
    {
      title: "Model Monitoring",
      content:
        "Tracking model performance, identifying drift, and ensuring continuous accuracy and reliability over time.",
      icon: <FaEye size={28} className="text-primary" />,
    },
    {
      title: "AI-Integrated Web Application",
      content:
        "Developing web applications that seamlessly integrate AI solutions with modern, user-friendly interfaces.",
      icon: <FaLaptopCode size={28} className="text-primary" />,
    },
    {
      title: "Model Integration",
      content:
        "Seamlessly integrating AI models into workflows, systems, and applications for maximum impact and usability.",
      icon: <FaPuzzlePiece size={28} className="text-primary" />,
    },
    {
      title: "Mobile Application Development",
      content:
        "Building intuitive and powerful mobile apps that bring geospatial and AI solutions to your fingertips.",
      icon: <FaMobileAlt size={28} className="text-primary" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Title and subtitle, centered */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR EXPERTISE</h2>
        <p className="text-gray-600">
          Leveraging cutting-edge technologies and methodologies to deliver
          comprehensive solutions tailored to your needs.
        </p>
      </div>

      {/* Expertise container */}
      <div className="max-w-5xl mx-auto flex flex-col space-y-16 md:space-y-20">
        {expertise.map((item, idx) => {
          // Determine layout: even index => left icon, right text. odd index => right icon, left text.
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
                <div className="p-6 rounded-full bg-white flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
              </div>

              {/* Text block */}
              <div className="md:w-1/2 md:px-10">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


import { useState, type JSX } from "react";

import { FaReact, FaRobot } from "react-icons/fa6";

import {
  SiExpress,
  SiFigma,
  SiGooglebigquery,
  SiGooglecloud,
  SiJsonwebtokens,
  SiN8N,
  SiNestjs,

  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { TbHexagon3D } from "react-icons/tb";
import Lightbox from "./Lightbox";

const iconMap: Record<string, JSX.Element> = {
  React: <FaReact className="text-blue-500 w-4 h-4 shrink-0" title="React" />,
  Express: <SiExpress className="text-black w-4 h-4 shrink-0" title="Express" />,
  n8n: <SiN8N className="text-orange-500 w-4 h-4 shrink-0" title="n8n" />,
  Tailwind: <SiTailwindcss className="text-cyan-500 w-4 h-4 shrink-0" title="Tailwind CSS" />,
  NestJS: <SiNestjs className="text-red-500 w-4 h-4 shrink-0" title="NestJS" />,
  BigQuery: <SiGooglebigquery className="text-blue-400 w-4 h-4 shrink-0" title="BigQuery" />,
  Redux: <SiRedux className="text-purple-500 w-4 h-4 shrink-0" title="Redux" />,
  JWT: <SiJsonwebtokens className="text-orange-500 w-4 h-4 shrink-0" title="JWT" />,
  GCP: <SiGooglecloud className="text-blue-600 w-4 h-4 shrink-0" title="Google Cloud Platform" />,
  Figma: <SiFigma className="text-pink-500 w-4 h-4 shrink-0" title="Figma" />,
};

const Portfolio = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<{ index: number; images: string[] } | null>(null);

  const projects = [
    {
      id: 1,
      title: "Web-Engineering-Systems",
      description: "Internal platform for managing model versions, drawings, and BOM data across engineering, production, QC, logistics, and installation.",
      details: `A streamlined internal system for controlling versions of 3D models and engineering drawings. It supports importing BOM data from engineering and shares that data across teams — including production, quality control, logistics, and installation. Includes a 3D model viewer powered by Autodesk Forge, with secure authentication and real-time updates.`,
      emoji: <TbHexagon3D />,
      tech: ["React", "Redux", "Tailwind", "NestJS", "BigQuery", "JWT", "GCP"],
      images: [
        // "/image/web-eng-1.png",
        // "/image/web-eng-2.png",
        // "/image/web-eng-3.png",
        // "/image/web-eng-4.png",
      ],
    },
    {
      id: 2,
      title: "Project UX/UI Design (Non-Degree)",
      description: "A hands-on UX/UI project developed during a non-degree design course using Figma.",
      details: `This project was part of my UX/UI design training. I worked through the whole process—from basic user research and sketches to building interactive prototypes in Figma. It helped me understand how to design clean, user-friendly interfaces with good layout and accessibility in mind.`,
      emoji: <SiFigma />,
      tech: ["Figma"],
      images: [
        // "/image/uxui-1.png",
        // "/image/uxui-2.png",
        // "/image/uxui-3.png",
        // "/image/uxui-4.png",
      ],
    },
    {
      id: 3,
      title: "Notification Line Chatbot",
      description: "An internal notification and support chatbot integrated with LINE and n8n.",
      details: `This chatbot system was built to handle internal issue reporting and repair requests via LINE. It also includes a rich menu interface for users to interact easily. The system integrates with the n8n workflow automation tool to route requests, respond to users automatically, and log relevant data. Designed to improve communication efficiency and reduce response time for internal support teams.`,
      emoji: <FaRobot />,
      tech: ["Express", "n8n", "GCP"],
      // images: ["/img/chatbot-1.png", "/img/chatbot-2.png"],
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const showLightbox = (images: string[], index: number) => {
    setLightboxIndex({ images, index });
  };

  

  return (
    <section id="portfolio" className="py-28 px-6 bg-white text-center text-black">
      <h2 className="text-5xl font-extrabold mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black">
        Portfolio
      </h2>

      <div className="flex flex-wrap items-start gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="group basis-full md:basis-[calc(50%-1rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg min-h-[300px]">
            <div className="flex items-center justify-center text-5xl text-gray-600 mb-4">{project.emoji}</div>
            <h3 className="text-xl font-bold mb-2 tracking-wide text-gray-800">{project.title}</h3>
            <p className="text-sm text-gray-600 font-mono leading-relaxed mb-4">{project.description}</p>

            <button onClick={() => toggleExpand(project.id)} className="inline-flex items-center mt-4 px-5 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:ring-1 hover:ring-gray-400 hover:shadow-md transition-all duration-300 ease-in-out">
              {expandedId === project.id ? "View Less ▲" : "View More ▼"}
            </button>

            {expandedId === project.id && (
              <div className="mt-5 p-5 rounded-2xl bg-gray-100 border border-gray-200 space-y-5 transition-all duration-500">
                <p className="text-left text-sm text-gray-800">{project.details}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono inline-flex items-center gap-1 px-4 py-1.5 text-sm rounded-full bg-white text-gray-700 font-semibold shadow-md ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400 hover:shadow-lg hover:scale-105 transition-all duration-300">
                      {iconMap[tech]}
                      {tech}
                    </span>
                  ))}
                </div>

                {project.images && project.images.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => showLightbox(project.images, i)}
                        className="relative overflow-hidden rounded-xl border border-gray-300 bg-white group shadow-sm cursor-zoom-in"
                      >
                        <img
                          src={img}
                          alt={`Screenshot ${i + 1}`}
                          className="object-cover w-full h-40 transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        ))}
      </div>

      {lightboxIndex && (
        <Lightbox
          lightboxIndex={lightboxIndex}
          setLightboxIndex={setLightboxIndex}
        />
      )}

    </section>
  );
};

export default Portfolio;


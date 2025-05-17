import type { JSX } from "react";
import { BsBoxes } from "react-icons/bs";
import {
  FaCodeBranch,
  FaDatabase,
  FaLaptopCode,
  FaCloudUploadAlt,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiDocker,
  SiGooglecloud,
  SiGithubactions,
  SiFlutter,
  SiExpress,
  SiRedux,
  SiMongodb,
  SiGooglebigquery,
  SiMysql,
  SiSwagger,
  SiFigma,
  SiN8N,
  SiGetx,
  SiPostman,
  SiGithub,
  SiVercel
} from "react-icons/si";

const Skills = () => {
  const iconMap: Record<string, JSX.Element> = {
    React: <SiReact className="text-sky-500 w-4 h-4 mr-2" />,
    "Next.js": <SiNextdotjs className="text-black w-4 h-4 mr-2" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500 w-4 h-4 mr-2" />,
    Redux: <SiRedux className="text-blue-600 w-4 h-4 mr-2" />,
    NestJS: <SiNestjs className="text-red-600 w-4 h-4 mr-2" />,
    Express: <SiExpress className="text-gray-800 w-4 h-4 mr-2" />,
    MongoDB: <SiMongodb className="text-emerald-600 w-4 h-4 mr-2" />,
    BigQuery: <SiGooglebigquery className="text-blue-700 w-4 h-4 mr-2" />,
    MySQL: <SiMysql className="text-sky-600 w-4 h-4 mr-2" />,
    Docker: <SiDocker className="text-blue-400 w-4 h-4 mr-2" />,
    GCP: <SiGooglecloud className="text-blue-500 w-4 h-4 mr-2" />,
    Swagger: <SiSwagger className="text-lime-600 w-4 h-4 mr-2" />,
    "GitHub Actions": <SiGithubactions className="text-gray-700 w-4 h-4 mr-2" />,
    "CI/CD": <SiGithubactions className="text-gray-700 w-4 h-4 mr-2" />,
    Flutter: <SiFlutter className="text-sky-600 w-4 h-4 mr-2" />,
    Figma: <SiFigma className="text-pink-500 w-4 h-4 mr-2" />,
    n8n: <SiN8N className="text-orange-500 w-4 h-4 mr-2" />,
    BLoC: <BsBoxes className="text-blue-400 w-4 h-4 shrink-0 mr-2" />,
    GetX: <SiGetx className="text-violet-500 w-4 h-4 shrink-0 mr-2" />,
    Postman: <SiPostman className="text-orange-500 w-4 h-4 shrink-0 mr-2" />,
    GitHub: <SiGithub className="text-black w-4 h-4 shrink-0 mr-2" />,
    Vercel: <SiVercel className="text-black w-4 h-4 shrink-0 mr-2" />,
  };
  const skills = [
    {
      icon: <FaLaptopCode className="text-blue-500 w-5 h-5" />,
      title: "Front-end",
      description: "Developing clean and responsive websites for all devices.",
      stack: ["React", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      icon: <FaCodeBranch className="text-purple-500 w-5 h-5" />,
      title: "Back-end",
      description: "Creating APIs and handling data between systems.",
      stack: ["NestJS", "Express"],
    },
    {
      icon: <FaMobileAlt className="text-sky-600 w-5 h-5" />,
      title: "Mobile",
      description: "Building mobile apps with Flutter for iOS and Android.",
      stack: ["Flutter", "GetX", "BLoC"],
    },
    {
      icon: <FaDatabase className="text-green-500 w-5 h-5" />,
      title: "Database",
      description: "Reliable storage solutions for structured and unstructured data.",
      stack: ["MongoDB", "BigQuery", "MySQL"],
    },
    {
      icon: <FaCloudUploadAlt className="text-indigo-500 w-5 h-5" />,
      title: "DevOps & Deployment",
      description: "Deploying apps and automating updates using cloud services.",
      stack: ["GCP", "GitHub Actions", "Docker" , "Vercel"],
    },
    {
      icon: <FaCode className="text-gray-700 w-5 h-5" />,
      title: "Tools",
      description: "Helpful tools for documenting, testing, and managing development.",
      stack: ["Swagger", "Figma", "n8n", "Postman", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black text-center flex justify-center items-center gap-2">
        <FaCode className="text-blue-500 drop-shadow-sm" />
          Tech Stack
      </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gray-100 rounded-full">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {section.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.stack.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono inline-flex items-center justify-center px-4 py-1.5 text-sm rounded-full
        bg-white text-gray-700 font-semibold shadow-md ring-1 ring-gray-300
        hover:bg-gray-50 hover:ring-gray-400 hover:shadow-lg
        hover:scale-105 hover:text-gray-700 transition-all duration-300"
                  >
                    {iconMap[skill] ?? null}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

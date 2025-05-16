import { HiDocumentText, HiMail } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";


const About = () => {

  
  return (
    <section
      id="about"
      className="relative py-15 px-6 text-center bg-white text-black overflow-hidden"
    >
      {/* Glowing background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-pink-600/20 blur-[160px] top-0 left-0 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[140px] bottom-0 right-0 animate-pulse" />
      </div>

      {/* Profile Image */}
      <div className="mb-8">
        <img
          src="/image/profile.jfif"
          alt="Apisit Kulkham"
          className="mx-auto w-50 h-55 rounded-full object-cover shadow-lg border-4 border-gray-200"
        />
      </div>

      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black">
        About Me
      </h2>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-xl text-gray-800 leading-relaxed font-medium">
        Hi, I'm Apisit — a flexible and self-driven developer who's passionate
        about building scalable web and mobile applications. I'm comfortable
        working across both frontend and backend, designing databases, and
        creating user-friendly UI tailored to real-world needs. I'm always eager
        to learn new technologies and adapt my tools to best fit the project and
        its goals.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">

  
     
        <a
          href="/pdf/apisitk-cv.pdf"
          download
          className="font-mono inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-gray-700 font-semibold shadow-md ring-2 ring-gray-200 hover:ring-gray-300 hover:text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all duration-300"
        >
          <HiDocumentText className="text-gray-500 text-lg drop-shadow-sm" />
          Download CV
        </a>

        <div className="flex gap-3">
          <a
            href="mailto:turtleapisit@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-700 shadow-md ring-2 ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 hover:scale-105 transition-all duration-300"
            aria-label="Email"
          >
            <HiMail className="text-xl" />
          </a>

          <a
            href="https://github.com/turtle-apisit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-700 shadow-md ring-2 ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 hover:scale-105 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/apisit-kulkham-97870b2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-700 shadow-md ring-2 ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 hover:scale-105 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>

      {/* Education */}
      <div className="mt-16 max-w-2xl mx-auto text-left">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
          <FaGraduationCap className="text-blue-500" /> Education
        </h3>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-gray-900">
              Bachelor of Science in Computer Science
            </h4>
            <p className="text-sm text-gray-600">
              Southeast Asia University, Thailand
            </p>
            <p className="text-sm text-gray-500">2019 - 2023 • GPA: 3.64</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-12 max-w-2xl mx-auto text-left">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
          <FaCertificate className="text-yellow-500" /> Certifications
        </h3>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-gray-900">
              UX/UI Design Fundamentals
            </h4>
            <p className="text-sm text-gray-600">
              King Mongkut's University of Technology Thonburi
            </p>
            <p className="text-sm text-gray-500">2024 - 2025</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-2">
              <li>
                Learned design thinking, user flows, wireframing, and UI
                prototyping.
              </li>
              <li>
                Built responsive layouts using Figma and user-centered design
                principles.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-16 max-w-2xl mx-auto text-left">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
          <FaBriefcase className="text-indigo-500" /> Work Experience
        </h3>

        <div className="space-y-4 mb-2">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-gray-900">
              Front-end Developer / Intern
            </h4>
            <p className="text-sm text-gray-600">
              CIRBOX Co., Ltd. - Nonthaburi, Thailand
            </p>
            <p className="text-sm text-gray-500 mb-2 mt-2">May 2020 - August 2020</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>
                Developed a frontend web application using Angular that enables
                customers to select and purchase products specifically for
                stocking their vending machines.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-gray-900">
              Full Stack Developer / Business System Developer
            </h4>
            <p className="text-sm text-gray-600">
              Sahaviriya Steel Industries PCL (Building Technology) – Bangkok,
              Thailand
            </p>
            <p className="text-sm text-gray-500 mb-2 mt-2">June 2023 - June 2025</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>
                Developed internal tools system using React, NestJS, BigQuery,
                and MongoDB.
              </li>
              <li>
                Migrated web applications to integrate Autodesk Forge for 3D
                model and drawing viewing.
              </li>
              <li>
                Implemented CI/CD pipelines using GitHub Actions, Docker, and
                Google Cloud Run.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

 
  


  );
};

export default About;

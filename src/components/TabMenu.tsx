import { useEffect, useState } from "react";

const TabMenu = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const top = aboutSection.getBoundingClientRect().top;
      setShow(top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center">
      <div
        className="px-6 py-2.5  rounded-xl bg-white/30 backdrop-blur-lg shadow-md border  border-gray-300
                   flex gap-6 text-sm font-semibold text-gray-500 transition-all duration-300"
      >
        <a href="#hero" className="hover:text-gray-800 transition">Home</a>
        <a href="#about" className="hover:text-gray-800 transition">About</a>
        <a href="#skills" className="hover:text-gray-800 transition">Skills</a>
        <a href="#portfolio" className="hover:text-gray-800 transition">Portfolio</a>
      </div>
    </nav>
  );
};

export default TabMenu;

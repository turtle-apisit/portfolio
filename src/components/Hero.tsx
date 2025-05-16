import { BsStars } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center bg-white items-center text-center px-4 ">
      {/* 🎥 Video Container with Rounded Corner */}
      <div className="relative w-full h-screen mt-2 max-w-screen-2xl rounded-3xl overflow-hidden shadow-xl">
        {/* 🎥 Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute  w-full h-full object-cover brightness-[0.5]"
        >
          <source src="/video/head-v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔲 Overlay */}
        <div className="absolute  bg-black/40 z-0" />

        {/* 📝 Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white min-h-[80vh] px-6">
          <p className="font-mono text-white text-xl sm:text-xl md:text-2xl tracking-wider mt-4">
            <Typewriter
              words={[
                "Code is magic.",
                "I build with spells.",
                "Welcome to my world.",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </p>

          <div className="flex mt-5 flex-wrap justify-center gap-4">
            <a
              href="#about"
              className="font-mono inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-gray-700 font-bold
             shadow-md shadow-gray-400/30 ring-2 ring-gray-300/40
             hover:bg-gray-100 hover:ring-gray-400 hover:shadow-gray-500/50
             hover:scale-105 hover:brightness-105 transition-all duration-300"
            >
              <BsStars className="text-gray-500 animate-pulse text-lg drop-shadow-[0_0_8px_rgba(156,163,175,0.4)]" />
              About Me
            </a>
            <a
              href="#preorder"
              className="font-mono  px-6 py-2 rounded-full text-white border border-white hover:bg-white hover:text-black transition"
            >
              Portfolio →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

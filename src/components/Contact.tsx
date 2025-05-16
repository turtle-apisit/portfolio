const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-b from-slate-900 to-black text-center overflow-hidden"
    >
      {/* background pattern glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-600 via-blue-600 to-transparent opacity-10 blur-[140px] rotate-45 animate-pulse" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
        Contact
      </h2>

      <p className="text-gray-400 mb-10 max-w-md mx-auto text-lg leading-relaxed">
        Got a project or idea? Let's connect and create something amazing together.
      </p>

      <a
        href="mailto:your.email@example.com"
        className="relative inline-block px-10 py-3 font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-md transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full border border-white/20 hover:border-white/40 transition duration-300"></span>
        <span className="relative z-10">Send Message</span>
      </a>
    </section>
  );
};

export default Contact;

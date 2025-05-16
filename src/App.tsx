import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import TabMenu from './components/TabMenu';

function App() {
  return (
    <div className="bg-white text-black font-sans relative">
      <Hero />
      <TabMenu />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Background from "./components/Background"; 
import Navbar from "./components/Navbar";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="relative">
      {/* Background AI particles */}
      <Background />

      {/* Navbar */}
      <Navbar />

      {/* Main sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certificates /> {/* 👈 Added Certificates Section */}
      <Experience />
      <Contact />
      <Footer/>

      {/* Footer can go here later */}
    </div>
  );
}

"use client"

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Palette, 
  Code, 
  ArrowDown, 
  Sparkles,
  User, 
  FolderOpen, 
  GraduationCap, 
  Cpu, 
  Wrench, 
  Briefcase 
} from 'lucide-react';
import TextType from './ui/TextType';
import dynamic from 'next/dynamic';

const FaultyTerminal = dynamic(() => import('./ui/FaultyTerminal'), {
  ssr: false 
});

const HeroSection = () => {
  
  // SOLUCIÓN: Definimos los estilos completos aquí para que Tailwind los detecte
  const tagStyles = {
    lime: "border-lime-400/30 text-lime-400 bg-lime-400/5 hover:bg-lime-400/10",
    blue: "border-blue-400/30 text-blue-400 bg-blue-400/5 hover:bg-blue-400/10",
    purple: "border-purple-400/30 text-purple-400 bg-purple-400/5 hover:bg-purple-400/10",
    green: "border-green-400/30 text-green-400 bg-green-400/5 hover:bg-green-400/10",
    pink: "border-pink-400/30 text-pink-400 bg-pink-400/5 hover:bg-pink-400/10",
    yellow: "border-yellow-400/30 text-yellow-400 bg-yellow-400/5 hover:bg-yellow-400/10",
    cyan: "border-cyan-400/30 text-cyan-400 bg-cyan-400/5 hover:bg-cyan-400/10",
    orange: "border-orange-400/30 text-orange-400 bg-orange-400/5 hover:bg-orange-400/10",
  };

  const heroTags = [
    { text: "Medical Robotics", color: "lime" },
    { text: "Bio-CAD Design", color: "blue" },
    { text: "Surgical Guides", color: "purple" },
    { text: "Additive Mfg", color: "green" },
    { text: "Mechatronics", color: "pink" },
    { text: "DICOM Processing", color: "yellow" },
    { text: "Embedded Systems", color: "cyan" },
    { text: "Ethical AI", color: "orange" },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black">
        
        {/* --- CAPA 1: FONDO (Faulty Terminal) --- */}
        <div className="absolute inset-0 w-full h-full z-0">
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1}
            timeScale={0.5}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={0.3}
            flickerAmount={0.1}
            noiseAmp={0.1}
            tint="#4ade80"
            mouseReact={true}
            mouseStrength={2}
            brightness={0.8}
          />
          <div className="absolute inset-0 bg-black/80 z-[1]"></div> 
        </div>

        {/* --- CAPA 2: CONTENIDO --- */}
        <div className="relative z-10 w-full flex flex-col items-center">
            
            {/* Navbar Flotante con Iconos Correctos */}
            <nav className="absolute top-0 left-0 right-0 flex justify-center z-50">
              <div className="flex items-center gap-2 sm:gap-4 text-sm text-gray-300 backdrop-blur-md bg-white/5 px-4 py-3 rounded-full border border-white/10 shadow-2xl">
                
                <ScrollLink to="about" smooth={true} duration={500} className="hover:text-lime-400 transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full" title="About">
                  <User className="w-5 h-5" />
                </ScrollLink>

                <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-blue-400 transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full" title="Projects">
                  <FolderOpen className="w-5 h-5" />
                </ScrollLink>

                <ScrollLink to="education" smooth={true} duration={500} className="hover:text-purple-400 transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full" title="Education">
                  <GraduationCap className="w-5 h-5" />
                </ScrollLink>

                <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-pink-400 transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full" title="Skills">
                  <Cpu className="w-5 h-5" />
                </ScrollLink>

                <ScrollLink to="tools" smooth={true} duration={500} className="hover:text-yellow-400 transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full" title="Tools">
                  <Wrench className="w-5 h-5" />
                </ScrollLink>

                <ScrollLink to="experience" smooth={true} duration={500} className="hover:text-orange-400 transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full" title="Experience">
                  <Briefcase className="w-5 h-5" />
                </ScrollLink>

              </div>
            </nav>

            {/* Scroll Infinito de Tags CORREGIDO */}
            <div className="w-full max-w-4xl overflow-hidden mb-10 mt-24 relative opacity-90">
                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
                
                <div className="flex animate-scroll whitespace-nowrap py-2">
                {[...heroTags, ...heroTags].map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      // AQUI ESTA EL CAMBIO: Usamos tagStyles[tag.color] en lugar de construir el string dinámicamente
                      className={`mx-3 px-4 py-1.5 rounded-full text-xs sm:text-sm backdrop-blur-sm uppercase tracking-wide transition-colors ${tagStyles[tag.color]}`}
                    >
                      {tag.text}
                    </Badge>
                ))}
                </div>
            </div>

            {/* Titulares Principales */}
            <div className="text-center px-4 max-w-5xl mx-auto">
                <div className="relative mb-4 inline-block">
                  <h1 className='text-3xl md:text-5xl lg:text-3xl font-serif'>I'm Jose Ramos</h1>
                </div>

                <h2 className="font-sans text-4xl md:text-7xl lg:text-3xl mb-8 leading-6 font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                    <TextType 
                      text={["passionate maker", "ethical engineer", "friendly innovator"]}
                      typingSpeed={95}
                      pauseDuration={2000}
                      showCursor={true}
                      cursorCharacter="|"
                      className="text-3xl md:text-5xl lg:text-6xl font-light text-white"
                    />              
                </h2>


                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pb-20 mt-30">
                    <Button
                      size="lg"
                      className="bg-lime-400 text-black hover:bg-lime-300 px-8 py-6 rounded-full text-lg font-medium shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] hover:scale-105 transition-all duration-300 group"
                    >
                      <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      See my Work
                    </Button>
                    
                    <ScrollLink to="about" smooth={true} duration={500}>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-white/10 text-gray-300 hover:text-white hover:border-white/30 bg-white/5 hover:bg-white/10 px-8 py-6 rounded-full text-lg backdrop-blur-md transition-all duration-300 group"
                        >
                        Know my Story
                        <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                        </Button>
                    </ScrollLink>
                </div>
            </div>
        </div>

        <style jsx>{`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-scroll {
                animation: scroll 40s linear infinite;
            }
        `}</style>
    </section>
  );
};

export default HeroSection;
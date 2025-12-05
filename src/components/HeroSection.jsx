"use client"

import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Recomendado para scroll suave
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Palette, Code, ArrowDown, Sparkles } from 'lucide-react';
import FaultyTerminal from './ui/FaultyTerminal'; // Ajusta la ruta si es necesario

const HeroSection = () => {
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
            scale={1.5} // Escala un poco más pequeña para que se vean más letras
            gridMul={[2, 1]}
            digitSize={1} // Letras más pequeñas para más densidad
            timeScale={0.5} // Animación más lenta para no marear
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={0.3} // Menos glitch para que no distraiga
            flickerAmount={0.1}
            noiseAmp={0.1}
            tint="#4ade80" // Tinte verde lima matrix (opcional, o #ffffff)
            mouseReact={true}
            mouseStrength={2}
            brightness={0.8}
          />
          {/* Overlay Oscuro: Vital para que el texto blanco se lea encima del terminal */}
          <div className="absolute inset-0 bg-black/80 z-[1]"></div> 
        </div>

        {/* --- CAPA 2: CONTENIDO (Texto y Botones) --- */}
        <div className="relative z-10 w-full flex flex-col items-center">
            
            {/* Navbar Flotante */}
            <nav className="absolute top-8 left-0 right-0 flex justify-center">
              <div className="flex items-center space-x-2 sm:space-x-8 text-sm text-gray-300 backdrop-blur-md bg-white/5 px-6 py-3 rounded-full border border-white/10 shadow-2xl">
                <ScrollLink to="about" smooth={true} duration={500} className="hover:text-lime-400 transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full">
                  <Home className="w-5 h-5" />
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-blue-400 transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full">
                  <Palette className="w-5 h-5" />
                </ScrollLink>
                <ScrollLink to="skills" smooth={true} duration={500} className="hover:text-orange-400 transition-colors cursor-pointer p-2 hover:bg-white/5 rounded-full">
                  <Code className="w-5 h-5" />
                </ScrollLink>
              </div>
            </nav>

            {/* Scroll Infinito de Tags */}
            <div className="w-full max-w-4xl overflow-hidden mb-10 mt-24 relative opacity-90">
                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
                
                <div className="flex animate-scroll whitespace-nowrap py-2">
                {[...heroTags, ...heroTags].map((tag, i) => (
                    <Badge
                    key={i}
                    variant="outline"
                    className={`mx-3 px-4 py-1.5 rounded-full text-xs sm:text-sm border-${tag.color}-400/30 text-${tag.color}-400 bg-${tag.color}-400/5 hover:bg-${tag.color}-400/10 transition-colors backdrop-blur-sm uppercase tracking-wide`}
                    >
                    {tag.text}
                    </Badge>
                ))}
                </div>
            </div>

            {/* Titulares Principales */}
            <div className="text-center px-4 max-w-5xl mx-auto">
                <div className="relative mb-4 inline-block">
                    <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white">
                    I'm <span className="font-serif italic font-normal bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent">Jose</span>,
                    </h1>
                </div>

                <h2 className="text-4xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                    Passionate Maker.
                </h2>

                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light backdrop-blur-sm rounded-xl p-4 bg-black/20 border border-white/5">
                    Biomedical Engineering Master's Student bridging <span className="text-white font-medium">mechanical precision</span> and <span className="text-white font-medium">human physiology</span>. Engineering equitable solutions through robotics and digital manufacturing.
                </p>

                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pb-20">
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

        {/* Estilo para la animación de scroll (puedes ponerlo en global.css también) */}
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
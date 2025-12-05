import React, { useRef, useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, MoveRight } from 'lucide-react';

const ProjectsSection = () => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // DATA: Aquí está la "magia" del rebranding
  const projects = [
    {
      title: "Robotic Post-Processing Cell", // Antes: Brazo robot
      description: "Automated finishing system for zirconia prosthetics using a 6-DOF Cobot arm. Integrated path planning for polishing complex dental geometries.",
      badges: ["Robotics", "Kinematics", "Automation"],
      image: "/project2.png", // Pon aquí tu render del brazo
    },
    {
      title: "Haptic Dental Simulator", // Antes: Simulador
      description: "Mechanical training device replicating human jaw articulation and tissue resistance. Designed for ergonomic dental education.",
      badges: ["Product Design", "Mechanisms", "Ergonomics"],
      image: "/project1.png", // Foto del simulador
    },
    {
      title: "Precision Induction Waxer", // Antes: Encerador
      description: "Dental waxing device with rapid heating PID control. Custom PCB design and thermal management housing.",
      badges: ["Electronics", "Thermal Control", "Embedded"],
      image: "/project3.png", // Foto del dispositivo/PCB
    },
    {
      title: "Digital Surgical Workflow", // Antes: Implementación consultorio
      description: "End-to-end process engineering: From CBCT/DICOM scanning to 3D printed surgical guides (<50µm accuracy).",
      badges: ["Clinical Eng.", "Process Opt.", "3D Printing"],
      image: "/project4.png", // Foto de una guía quirúrgica
    }
  ];

  // Duplicamos el array para el efecto "infinito"
  const extendedProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="py-20 px-0 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A selection of engineering challenges solved through mechatronics and biomedical design.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Masks for fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 hidden md:block"></div>

        <div 
          ref={carouselRef}
          className={`flex gap-6 px-4 ${isPaused ? 'animate-none' : 'animate-scroll'}`}
          style={{ 
            width: "max-content",
            animation: "scroll 40s linear infinite" 
          }}
        >
         {extendedProjects.map((project, index) => (
  <div
    key={index}
    // Ajustamos el ancho y alto fijo para uniformidad en el carrusel
    className="relative w-[300px] md:w-[350px] flex-shrink-0 group px-2"
  >
    {/* Hacemos la tarjeta más alta (rectangular) o cuadrada según prefieras. 
        Aquí pongo h-[400px] para que sea vertical y elegante. */}
    <Card className="relative bg-gray-900 border-white/10 overflow-hidden h-[400px] flex flex-col justify-end transition-all duration-500  group-hover:border-purple-500/50">
      
      {/* 1. IMAGEN DE FONDO (Cubre todo hasta arriba) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* 2. SUPERPOSICIÓN OSCURA (Gradient Overlay) 
            Necesario para que el texto blanco se lea sobre cualquier imagen.
            Va de negro (abajo) a transparente (arriba). */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>

      {/* 3. CONTENIDO (Flotando encima de la imagen) */}
      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        
        <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            
            {/* Flecha que aparece al hacer hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
               <div className="bg-purple-500 p-2 rounded-full shadow-lg text-white">
                 <MoveRight className="w-4 h-4" />
               </div>
            </div>
          </div>

          <p className="text-sm text-gray-300 line-clamp-2 mb-4 opacity-90">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.badges.map((badge, i) => (
              <Badge key={i} variant="secondary" className="bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white hover:bg-white/20">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  </div>
))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Mueve solo un tercio (el set original) para loop perfecto */
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
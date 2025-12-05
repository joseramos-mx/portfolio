import React from 'react';
// Asumiendo que tienes los iconos o imágenes. 
// Si usas lucide-react, importalos. Si son imágenes, usa las rutas correctas.
import { Cpu, Code, Layers, PenTool, Database, Terminal } from 'lucide-react';

const ToolsSection = () => {
  const toolCategories = [
    {
      title: "Engineering & Design (CAD)",
      icon: <PenTool className="w-5 h-5 text-blue-400" />,
      tools: [
        { name: "SolidWorks (CSWP)", img: "/icons/solidworks.png" }, // ¡Vital!
        { name: "Fusion 360", img: "/icons/fusion.png" },
        { name: "nTopology", img: "/icons/ntop.png" }, // Muestra vanguardia
        { name: "Blender", img: "/icons/blender.png" },
      ]
    },
    {
      title: "Biomedical & Simulation",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      tools: [
        { name: "ITK Snap", img: "/icons/itk.png" },
        { name: "BlueSkyPlan", img: "/icons/blueskyplan.png" }, // Tu experiencia dental
        { name: "Meshmixer", img: "/icons/meshmixer.avif" },
        { name: "MATLAB", img: "/icons/matlab.png" },
      ]
    },
    {
      title: "Manufacturing (CAM)",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      tools: [
        { name: "Chitubox Pro", img: "/icons/chitubox.png" },
        { name: "Lychee slicer", img: "/icons/lychee.png" },
        { name: "3D Slicer", img: "/icons/3dslicer.png" },
        { name: "Cura", img: "/icons/cura.png" },
      ]
    },
    {
      title: "Electronics & Code",
      icon: <Terminal className="w-5 h-5 text-orange-400" />,
      tools: [
        { name: "G Code", img: "/icons/g.jpg" },
        { name: "C++ / Arduino", img: "/icons/arduino.png" },
        { name: "EasyEDA", img: "/icons/easyeda.png" },
        { name: "Git / GitHub", img: "/icons/github.webp" },
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent font-bold">
              Tech Stack
            </span>{" "}
            & Tools
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit bridging mechanical engineering, biomedical analysis, and digital manufacturing.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((category, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
              
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="p-2 bg-white/5 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl text-gray-200 font-medium">{category.title}</h3>
              </div>

              {/* Tools Grid inside Category */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {category.tools.map((tool, tIdx) => (
                  <div key={tIdx} className="flex flex-col items-center group">
                    <div className="w-12 h-12 mb-3 bg-black/40 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 shadow-lg">
                      {/* Placeholder para imagen - usa tus <img> reales aquí */}
                      <img src={tool.img} alt={tool.name} className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                      
                    </div>
                    <span className="text-xs text-gray-400 text-center group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
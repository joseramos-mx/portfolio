import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Flower2, 
  ArrowUpRight, 
  Github, 
  HandHeart, 
  RefreshCw, 
  Scale, 
  Users, 
  Lightbulb 
} from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Elements - Más sutiles para no distraer */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lime-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header Compacto */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            About <span className="font-bold bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* Bento Grid Layout - Gaps reducidos de 6 a 4 para eliminar huecos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* ------------------------------------------------------- */}
          {/* COLUMNA 1: FOTO - Se adapta a la altura del contenido */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative group rounded-2xl overflow-hidden h-full min-h-[400px] shadow-2xl border border-white/5">
              {/* Overlay gradiente para asegurar lectura de texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
              
              <img
                src="/joseramos.jpg" 
                alt="Jose Ramos"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Location Badge */}
              <div className="absolute top-3 right-3 z-20">
                 <Badge className="bg-black/60 backdrop-blur-md border border-white/10 text-white px-2 py-0.5 flex gap-1 text-xs">
                    <MapPin size={10} className="text-lime-400"/> Mexico
                 </Badge>
              </div>

              {/* Name Overlay */}
              <div className="absolute bottom-5 left-5 z-20">
                <h3 className="text-2xl font-bold text-white leading-tight">José Ramos</h3>
                <p className="text-lime-400 font-medium text-sm tracking-wide">Ethical Engineer</p>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* COLUMNA 2: CONTENIDO - Denso y organizado */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* A. TARJETA PRINCIPAL: Filosofía + Human Stack */}
            {/* Usamos h-auto para que crezca según el texto y no recorte nada */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 rounded-2xl relative overflow-hidden group">
              
              <div className="relative z-10">
                {/* 1. Narrativa */}
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light mb-3">
                    Driven by a single conviction: <span className="text-lime-400 font-medium">technology is an equalizer.</span>
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    My journey spanning additive manufacturing and hardware is about bridging technical complexity with human accessibility. I strive to create equitable solutions, designing with consciousness, inclusivity, and purpose.
                  </p>
                </div>

                {/* 2. Human Stack (Grid Compacto) */}
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <HandHeart size={14} className="text-lime-500" />
                    Human Stack
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Items compactos */}
                    <SkillItem icon={<RefreshCw size={16}/>} color="text-lime-400" bg="bg-lime-500/10" title="Adaptive Learner" desc="Curiosity to capability." />
                    <SkillItem icon={<Scale size={16}/>} color="text-blue-400" bg="bg-blue-500/10" title="Ethical Mindset" desc="Impact over profit." />
                    <SkillItem icon={<Users size={16}/>} color="text-purple-400" bg="bg-purple-500/10" title="Collaborative Lead" desc="Empowering teams." />
                    <SkillItem icon={<Lightbulb size={16}/>} color="text-orange-400" bg="bg-orange-500/10" title="Problem Solver" desc="Constraints = Innovation." />
                  </div>
                </div>
              </div>
            </Card>

            {/* B. FILA INFERIOR: Socials + Focus Areas */}
            {/* Usamos grid para asegurar misma altura */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Contacto Compacto */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-5 rounded-2xl flex flex-col justify-center h-full">
                <h4 className="text-white font-medium text-sm mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Connect
                </h4>
                <div className="space-y-2">
                  <SocialButton href="https://linkedin.com/in/jose-ramosmx" icon={<Linkedin size={16} className="text-blue-400"/>} label="LinkedIn" />
                  <SocialButton href="mailto:joseramos.mx@outlook.com" icon={<Mail size={16} className="text-lime-400"/>} label="Email" />
                  <SocialButton href="https://github.com/joseramos-mx" icon={<Github size={16} className="text-purple-400"/>} label="GitHub" />
                </div>
              </Card>

              {/* Focus Areas Compacto */}
              <Card className="bg-gradient-to-br from-white/5 to-white/0 border-white/10 backdrop-blur-sm p-5 rounded-2xl flex flex-col justify-center h-full">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Focus Areas</h4>
                <div className="flex flex-wrap gap-2 content-start">
                   <FocusBadge color="lime" text="Ethical AI" />
                   <FocusBadge color="blue" text="Biomedical R&D" />
                   <FocusBadge color="purple" text="Human Design" />
                   <FocusBadge color="orange" text="Social Innovation" />
                </div>
              </Card>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Componentes auxiliares para limpiar el código y asegurar consistencia ---

const SkillItem = ({ icon, color, bg, title, desc }) => (
  <div className="bg-white/5 border border-white/5 rounded-lg p-2.5 flex items-center gap-3 hover:bg-white/10 transition-colors">
    <div className={`${bg} ${color} p-1.5 rounded-md shrink-0`}>
      {icon}
    </div>
    <div>
      <h5 className="text-gray-200 font-medium text-xs md:text-sm">{title}</h5>
      <p className="text-gray-500 text-[10px] md:text-xs leading-tight">{desc}</p>
    </div>
  </div>
);

const SocialButton = ({ href, icon, label }) => (
  <Button variant="ghost" className="w-full justify-between bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white h-9 px-3 text-xs md:text-sm group" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className="flex items-center gap-2">{icon} {label}</span>
      <ArrowUpRight size={14} className="opacity-30 group-hover:opacity-100 transition-opacity"/>
    </a>
  </Button>
);

const FocusBadge = ({ color, text }) => {
  // Mapeo simple de colores para Tailwind (puedes ajustar si usas clases custom)
  const colors = {
    lime: "bg-lime-500/10 text-lime-300 border-lime-500/20",
    blue: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    orange: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  };
  
  return (
    <Badge className={`${colors[color]} border px-2.5 py-1 text-[10px] md:text-xs hover:scale-105 transition-transform cursor-default`}>
      {text}
    </Badge>
  );
};

export default AboutSection;
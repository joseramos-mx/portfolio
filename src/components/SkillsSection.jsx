import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Printer, BrainCircuit, Activity } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <h2 className="text-4xl md:text-6xl font-light text-center">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-light">
              Core Competencies
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* CARD 1: ENGINEERING & DESIGN (Hard Skills) */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-orange-400 group-hover:text-orange-300 transition-colors">
                <Cpu className="w-6 h-6" />
                Engineering Design
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SkillItem name="SolidWorks (CAD)" level="CSWP Certified" color="text-orange-400" bg="bg-orange-400/10" />
              <SkillItem name="Generative Design (nTop)" level="Basic / Learning" color="text-blue-400" bg="bg-blue-400/10" />
              <SkillItem name="FEA / Simulation" level="Intermediate" color="text-purple-400" bg="bg-purple-400/10" />
              <SkillItem name="Reverse Engineering" level="Advanced" color="text-emerald-400" bg="bg-emerald-400/10" />
              <SkillItem name="Mechatronics / Circuits" level="B.Sc. Level" color="text-gray-400" bg="bg-white/5" />
            </CardContent>
          </Card>

          {/* CARD 2: BIOMANUFACTURING (Your Superpower) */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                <Printer className="w-6 h-6" />
                Bio-Manufacturing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SkillItem name="SLA/DLP 3D Printing" level="Expert" color="text-emerald-400" bg="bg-emerald-400/10" />
              <SkillItem name="DICOM to STL Processing" level="Advanced" color="text-emerald-400" bg="bg-emerald-400/10" />
              <SkillItem name="Surgical Guides Design" level="Advanced" color="text-blue-400" bg="bg-blue-400/10" />
              <SkillItem name="CNC Milling (Zirconia)" level="Intermediate" color="text-purple-400" bg="bg-purple-400/10" />
              <SkillItem name="DfAM (Design for Additive)" level="Expert" color="text-emerald-400" bg="bg-emerald-400/10" />
            </CardContent>
          </Card>

          {/* CARD 3: PROFESSIONAL SKILLS (Rebranding Management) */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                <BrainCircuit className="w-6 h-6" />
                R&D Competencies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SkillItem name="Clinical Communication" level="Advanced" color="text-blue-400" bg="bg-blue-400/10" />
              <SkillItem name="Technical Documentation" level="Advanced" color="text-blue-400" bg="bg-blue-400/10" />
              <SkillItem name="Agile / Scrum" level="Intermediate" color="text-purple-400" bg="bg-purple-400/10" />
              <SkillItem name="Quality Control (QA/QC)" level="Advanced" color="text-emerald-400" bg="bg-emerald-400/10" />
              <SkillItem name="Problem Solving" level="Engineering Mindset" color="text-gray-400" bg="bg-white/5" />
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

// Componente auxiliar para limpiar el código repetitivo
const SkillItem = ({ name, level, color, bg }) => (
  <div className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
    <span className="text-gray-300 text-sm md:text-base font-light">{name}</span>
    <Badge variant="secondary" className={`${bg} ${color} border-0 font-normal tracking-wide`}>
      {level}
    </Badge>
  </div>
);

export default SkillsSection;
import React from 'react';
import { Briefcase, MapPin, Calendar, ArrowUpRight, ChevronRight, Layers, Cpu } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"; // Asumiendo que usas shadcn o similar
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background Decor (Optional Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
            Professional <span className='text-white font-light'>Trajectory</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            From technical prototyping to managing biomedical operations and founding innovation hubs.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-900 hidden md:block"></div>

          {/* ITEM 1: RMS (The Current Highlight) */}
          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            {/* Date Badge (Left on Desktop) */}
            <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right flex flex-col items-start md:items-end">
              <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10 px-3 py-1 mb-2">
                2023 - Present
              </Badge>
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">CEO & Founder</h3>
              <p className="text-emerald-400 font-medium">RMS Innovation Industries</p>
            </div>

            {/* Center Node */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-black shadow-[0_0_15px_rgba(16,185,129,0.5)] transform -translate-x-1/2 z-10 hidden md:block"></div>

            {/* Card Content (Right on Desktop) */}
            <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-12 border-l-2 border-emerald-500/30 md:border-l-0">
              <Card className="bg-white/5 border-emerald-500/20 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    Driving innovation through a multidisciplinary ecosystem. Leading two specialized divisions focusing on digital workflows and additive manufacturing.
                  </p>
                  
                  {/* Divisions Grid - Rompe el texto largo */}
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="bg-white/5 p-3 rounded-lg border-l-2 border-blue-400">
                      <h4 className="text-blue-300 font-semibold text-sm mb-1 flex items-center gap-2">
                        <Cpu size={14} /> Devlabs
                      </h4>
                      <p className="text-xs text-gray-400">Development of webapps, webpages and AI agents.</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border-l-2 border-blue-400">
                      <h4 className="text-blue-300 font-semibold text-sm mb-1 flex items-center gap-2">
                        <Layers size={14} /> Zahnfacturing
                      </h4>
                      <p className="text-xs text-gray-400">Advanced dental lab specializing in DICOM to STL conversion, surgical guides, and zirconia milling.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">Leadership</span>
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/10">B2B Strategy</span>
                    <span className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/10">Full-Arch Implants</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ITEM 2: Central Médica (The Promotion Story) */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
             {/* Date Badge (Right on Desktop due to reverse) */}
             <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0 md:text-left flex flex-col items-start w-full">
              <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 px-3 py-1 mb-2">
                2022 - Present
              </Badge>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">Operational Deputy Director</h3>
              <div className="flex items-center gap-2 text-blue-400 font-medium">
                <span>Central Médica Santa Ana</span>
                <ArrowUpRight size={16} className="text-green-400" />
              </div>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Promoted from Manufacturing Engineer</p>
            </div>

            {/* Center Node */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black shadow-[0_0_15px_rgba(59,130,246,0.5)] transform -translate-x-1/2 z-10 hidden md:block"></div>

            {/* Card Content (Left on Desktop due to reverse) */}
            <div className="md:w-1/2 md:pr-12 w-full pl-12 md:pl-0 border-l-2 border-blue-500/30 md:border-l-0">
              <Card className="bg-white/5 border-blue-500/20 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  {/* The Promotion Highlight */}
                  <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded mb-4">
                    <p className="text-xs text-blue-200">
                      🚀 <strong>Career Growth:</strong> Promoted to Deputy Director due to successful implementation of digital workflows that optimized surgical outcomes.
                    </p>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <ChevronRight size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span>Specialized in digital scanning and custom 3D design for implantology.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <ChevronRight size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span>Integration of PEEK, PMMA, and Zirconia milling workflows.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <ChevronRight size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span>Design of preoperative surgical guides for precision surgery.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ITEM 3: ITD (The Foundation) */}
          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            {/* Date Badge */}
            <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right flex flex-col items-start md:items-end">
              <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-500/10 px-3 py-1 mb-2">
                2021 - 2022
              </Badge>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">3D Printing Technician</h3>
              <p className="text-purple-400 font-medium">Centro de Innovación Tecnológica (ITD)</p>
            </div>

            {/* Center Node */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-900 border-4 border-black transform -translate-x-1/2 z-10 hidden md:block"></div>

            {/* Card Content */}
            <div className="md:w-1/2 md:pl-12 w-full pl-12 md:pl-12 border-l-2 border-purple-900/30 md:border-l-0">
              <Card className="bg-white/5 border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-400 text-sm mb-4">
                    Foundational experience in additive manufacturing and CAD design for the livestock and industrial sectors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 text-xs">SolidWorks</Badge>
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 text-xs">Prototyping</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="p-3 bg-blue-500/10 rounded-full">
            <GraduationCap className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-light">
            Academic <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">Background</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* MASTER'S DEGREE - The "Current" Highlight */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <Card className="relative bg-black border-white/10 h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 px-3 py-1">
                    Current (2023 - 2025)
                  </Badge>
                  <BookOpen className="w-5 h-5 text-gray-500" />
                </div>
                <CardTitle className="text-2xl text-white">Master in Biomedical Engineering</CardTitle>
                <p className="text-lg text-cyan-400 font-medium mt-1">
                  Universidad Internacional de Valencia (VIU)
                </p>
                <p className="text-sm text-gray-400">Spain (Online Modality)</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  specializing in the intersection of mechanical engineering and human physiology. Focusing on the design of prosthetic devices and rehabilitation technologies.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-400/10 text-blue-300 hover:bg-blue-400/20">
                      Biomechanics
                    </Badge>
                    <Badge variant="secondary" className="bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20">
                      Implant Design
                    </Badge>
                    <Badge variant="secondary" className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20">
                      Biomaterials
                    </Badge>
                    <Badge variant="secondary" className="bg-indigo-400/10 text-indigo-300 hover:bg-indigo-400/20">
                      Rehabilitation Tech
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* BACHELOR'S DEGREE - The "Foundation" */}
          <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/5 px-3 py-1">
                  2018 - 2023
                </Badge>
                <Award className="w-5 h-5 text-gray-500" />
              </div>
              <CardTitle className="text-2xl text-white">B.S. Mechatronics Engineering</CardTitle>
              <p className="text-lg text-purple-400 font-medium mt-1">
                Instituto Tecnológico de Durango
              </p>
              <p className="text-sm text-gray-400">Durango, Mexico</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Comprehensive engineering foundation combining mechanics, electronics, and software. Graduated with academic excellence.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-400/10 text-purple-300">
                    Robotics & Control
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-400/10 text-pink-300">
                    Embedded Systems
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-400/10 text-orange-300">
                    Industrial Automation
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-400/10 text-yellow-300 border border-yellow-400/20">
                    Ceneval Award of Excellence
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
"use client"

import Link from "next/link"
import {
  Home,
  Palette,
  Code,
  Camera,
  Lightbulb,
  Sparkles,
  Zap,
  Briefcase,
  MapPin,
  Award,
  Trophy,
  User,
  GraduationCap,
  Wrench,
  Cpu,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  PlusCircle,
  Heart,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef, useState } from "react" // Importar useRef y useState
import ExperienceSection from "./ExperienceSection"
import ToolsSection from "./ToolsSection"
import SkillsSection from "./SkillsSection"
import EducationSection from "./EducationSection"
import ProjectsSection from "./ProjectsSection"
import AboutSection from "./AboutSection"
import FaultyTerminal from './ui/FaultyTerminal';
import HeroSection from "./HeroSection"


export default function PagePortfolio() {

  return (
    
    <div className="bg-black text-white">
      {/* Hero Section */}
      <HeroSection/>

      <AboutSection/>

      <ProjectsSection/>

      <EducationSection/>

      <SkillsSection/>

      <ToolsSection/>

      <ExperienceSection/>


      <footer className="bg-gray-950 py-8 px-4 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Jose Ramos. All rights reserved. Powered by RMS Innovation.</p>
          <p className="mt-2 justify-center flex items-center gap-1">
            Built with <Heart className="h-4"/>
          </p>
        </div>
      </footer>


    </div>
  )
}

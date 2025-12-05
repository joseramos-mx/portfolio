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


export default function Page() {

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
          <p>&copy; {new Date().getFullYear()} Jose. All rights reserved.</p>
          <p className="mt-2">
            Built with{" "}
            <Link href="https://nextjs.org" className="hover:text-white transition-colors">
              Next.js
            </Link>{" "}
            and{" "}
            <Link href="https://ui.shadcn.com" className="hover:text-white transition-colors">
              shadcn/ui
            </Link>
            .
          </p>
        </div>
      </footer>


    </div>
  )
}

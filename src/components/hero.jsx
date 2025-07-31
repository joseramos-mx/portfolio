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

export default function HeroSection() {
  const projects = [
    {
      title: "Dental simulator",
      description: "Innovative design for a surgical tool.",
      image: "/project1.png?height=600&width=400",
      badges: ["Medical Devices", "Prototyping", "Ergonomics"],
    },
    {
      title: "Smart Home Automation System",
      description: "Integrated IoT solution for energy efficiency.",
      image: "/hand.jpg?height=600&width=400",
      badges: ["IoT", "Automation", "UI/UX"],
    },
    {
      title: "Advanced Robotics Arm",
      description: "High-precision manipulator for industrial applications.",
      image: "/project1.png?height=600&width=400",
      badges: ["Robotics", "Control Systems", "CAD Design"],
    },
    {
      title: "AI-Powered Diagnostic Tool",
      description: "Revolutionizing medical diagnosis with AI.",
      image: "/project1.png?height=600&width=400",
      badges: ["AI", "Healthcare", "Machine Learning"],
    },
    {
      title: "Sustainable Energy Solution",
      description: "Eco-friendly power generation system.",
      image: "/project1.png?height=600&width=400",
      badges: ["Renewable Energy", "Engineering", "Sustainability"],
    },
    {
      title: "VR Training Simulator",
      description: "Immersive virtual reality for skill development.",
      image: "/project1.png?height=600&width=400",
      badges: ["Virtual Reality", "Simulation", "Education"],
    },
  ]

  // State and ref for drag functionality
  const carouselRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isAnimationPaused, setIsAnimationPaused] = useState(false)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setIsAnimationPaused(true) // Pause animation on drag start
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setIsAnimationPaused(false) // Resume animation on mouse leave
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsAnimationPaused(false) // Resume animation on mouse up
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2 // Adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk
  }




  return (
    
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden">

        {/* Navigation with backdrop blur */}
        <nav className="flex justify-center pt-8 pb-16 relative z-10">
          <div className="flex items-center space-x-8 text-sm text-gray-300 backdrop-blur-sm bg-white/5 px-8 py-4 rounded-full border border-white/10">
            <Link
              href="#about"
              className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Home className="w-4 h-4" />
            </Link>
            <Link
              href="#education"
              className="hover:text-blue-400 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Palette className="w-4 h-4" />
            </Link>
            <Link
              href="#skills"
              className="hover:text-orange-400 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Code className="w-4 h-4" />
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto relative z-10">
          {/* Enhanced Infinite Scrolling Band */}
          <div className="w-full overflow-hidden mb-12 relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

            <div className="flex animate-scroll whitespace-nowrap py-4">
              <div className="flex items-center space-x-6">
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-lime-400/30 text-lime-400 bg-lime-400/5 hover:bg-lime-400/10 transition-colors backdrop-blur-sm"
                >
                  3D printing
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-blue-400/30 text-blue-400 bg-blue-400/5 hover:bg-blue-400/10 transition-colors backdrop-blur-sm"
                >
                  Solidworks
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-purple-400/30 text-purple-400 bg-purple-400/5 hover:bg-purple-400/10 transition-colors backdrop-blur-sm"
                >
                  FEM
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-green-400/30 text-green-400 bg-green-400/5 hover:bg-green-400/10 transition-colors backdrop-blur-sm"
                >
                  UI design
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-pink-400/30 text-pink-400 bg-pink-400/5 hover:bg-pink-400/10 transition-colors backdrop-blur-sm"
                >
                  Operative direction
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-yellow-400/30 text-yellow-400 bg-yellow-400/5 hover:bg-yellow-400/10 transition-colors backdrop-blur-sm"
                >
                  CNC
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-cyan-400/30 text-cyan-400 bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors backdrop-blur-sm"
                >
                  Circuit design
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-orange-400/30 text-orange-400 bg-orange-400/5 hover:bg-orange-400/10 transition-colors backdrop-blur-sm"
                >
                  DICOM to STL
                </Badge>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center space-x-6 ml-6">
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-lime-400/30 text-lime-400 bg-lime-400/5 hover:bg-lime-400/10 transition-colors backdrop-blur-sm"
                >
                  3D printing
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-blue-400/30 text-blue-400 bg-blue-400/5 hover:bg-blue-400/10 transition-colors backdrop-blur-sm"
                >
                  Solidworks/Fusion
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-purple-400/30 text-purple-400 bg-purple-400/5 hover:bg-purple-400/10 transition-colors backdrop-blur-sm"
                >
                  FEM
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-green-400/30 text-green-400 bg-green-400/5 hover:bg-green-400/10 transition-colors backdrop-blur-sm"
                >
                  UI design
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-pink-400/30 text-pink-400 bg-pink-400/5 hover:bg-pink-400/10 transition-colors backdrop-blur-sm"
                >
                  Operative direction
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-yellow-400/30 text-yellow-400 bg-yellow-400/5 hover:bg-yellow-400/10 transition-colors backdrop-blur-sm"
                >
                  CNC
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-cyan-400/30 text-cyan-400 bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors backdrop-blur-sm"
                >
                  Circuit design
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-2 rounded-full text-sm border-orange-400/30 text-orange-400 bg-orange-400/5 hover:bg-orange-400/10 transition-colors backdrop-blur-sm"
                >
                  DICOM to STL
                </Badge>
              </div>
            </div>
          </div>

          {/* Enhanced Main Title */}
          <div className="flex items-center mb-8 group">
            <div className="relative">
              <div className="absolute inset-0 w-10 h-10 bg-lime-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <h1 className="text-4xl md:text-8xl lg:text-8xl font-light leading-tight bg-gradient-to-r font-serif from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              I'm Jose,
            </h1>
          </div>

          <h1 className="text-4xl md:text-8xl lg:text-8xl mt-[-45px] font-light mb-8 leading-tight bg-gradient-to-r from-orange-400 via-pink-300 to-indigo-400 bg-clip-text text-transparent">
            Passionate maker.
          </h1>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-lime-400 to-green-400 text-black px-10 py-4 rounded-full font-medium hover:from-lime-300 hover:to-green-300 transition-all duration-300 shadow-lg shadow-lime-400/25 hover:shadow-lime-400/40 hover:scale-105 group"
            >
              <Palette className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              See projects
            </Button>
            <Link href="#about" className="transition-transform">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/20 text-white px-10 py-4 rounded-full font-medium hover:border-lime-400/50 hover:text-lime-400 transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-105 group"
            >
              <Home className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Know about me
            </Button>
            </Link>
            
          </div>
        </div>

        {/* Enhanced grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      {/* About Section */}
      {/* About Section - Responsive with Photo */}
      <section id="about" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 md:mb-12 justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent text-center">
              About <span className="font-bold">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Photo Section and Contact Card */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start gap-8">
              <div className="relative group w-full flex justify-center lg:justify-start">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src="/joseramos.jpg?height=400&width=400"
                  alt="Jose - Passionate Maker"
                  className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px] object-cover rounded-2xl border-2 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              {/* New Card for Social Media and Contact */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm w-full max-w-md lg:max-w-none">
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-xl md:text-xl text-white ">Connect with Me</CardTitle>
                  <CardDescription className="text-base text-gray-400">
                    Reach out through my social channels or direct contact.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0 space-y-4">
                  <div className="flex items-center gap-3 mt-[-20]">
                    <Mail className="w-5 h-5 text-lime-400 flex-shrink-0" />
                    <Link
                      href="mailto:your.email@example.com"
                      className="text-gray-300 text-sm md:text-base hover:text-lime-400 transition-colors"
                    >
                      your.email@example.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <Link
                      href="tel:+1234567890"
                      className="text-gray-300 text-sm md:text-base hover:text-blue-400 transition-colors"
                    >
                      +1 (234) 567-890
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 mb-[-20]">
                    <Linkedin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <Link
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 text-sm md:text-base hover:text-purple-400 transition-colors">
                      LinkedIn/yourprofile
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed px-5">
                  I am José a student of the master in biomedical engineering at VIU. my passion for learning and
                  showing others what is doable with very little making skills is what got me interested in areas like
                  additive manufacture, web design, entrepreneurship and hardware. I really believe people can show off
                  the best of themselves using technology and innovation as an empowerer, always being conscious of
                  differences, equity and progress.
                </p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed font-serif px-5">
                  I believe that technology and innovation are powerful tools that can empower individuals and drive
                  societal progress. My goal is to harness these tools to create equitable solutions that address
                  diverse needs and promote inclusivity. I am dedicated to continuous learning and growth, always
                  seeking new ways to apply my skills and knowledge to make a positive impact.
                </p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed font-serif px-5">
                  I am eager to connect with professionals and peers in the engineering, technology, and biomedical
                  sectors to share insights, collaborate on projects, and explore new opportunities. Together, we can
                  push the boundaries of what is possible and contribute to a better, more innovative future.
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8">
                  <Badge
                    variant="outline"
                    className="border-lime-400/30 text-lime-400 bg-lime-400/5 text-xs md:text-sm"
                  >
                    Problem Solver
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-400/30 text-blue-400 bg-blue-400/5 text-xs md:text-sm"
                  >
                    Innovation Driven
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-400/30 text-purple-400 bg-purple-400/5 text-xs md:text-sm"
                  >
                    Detail Oriented
                  </Badge>
                </div>
              </div>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-lime-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">Based in Mexico</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">Mechatronics Engineer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">2+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">Innovation Enthusiast</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section - Infinite Gallery with Drag */}
      <section id="projects" className="py-12 md:py-20 px-0 bg-gradient-to-b from-blackoverflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
          <div className="flex items-center gap-4 justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center h-full">
              My <span className="font-bold">Projects</span>
            </h2>
          </div>
        </div>

<div
  ref={carouselRef}
  className="relative w-full overflow-x-scroll scrollbar-hidden cursor-grab active:cursor-grabbing"
  onMouseDown={handleMouseDown}
  onMouseLeave={handleMouseLeave}
  onMouseUp={handleMouseUp}
  onMouseMove={handleMouseMove}
>

          <div className={`flex whitespace-nowrap ${isAnimationPaused ? "" : "animate-project-scroll"}`}>
            {/* Duplicate content for seamless loop */}
            {[...projects].map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100vw/1.5)] sm:w-[calc(100vw/2.5)] md:w-[calc(100vw/3.5)] lg:w-[calc(100vw/4.5)] xl:w-[calc(100vw/5.5)] px-2"
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm rounded-xl overflow-hidden h-[400px] flex flex-col p-0">
                  <div className="relative w-full h-full flex-grow">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                      <h3 className="text-xl font-semibold text-white mb-1 truncate">{project.title}</h3>
                      <p className="text-sm text-gray-300 mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.badges.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} variant="secondary" className="bg-white/10 text-white text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10"
                      >
                        <PlusCircle className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gradient-to-b  to-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center">
            
            <h2 className="text-3xl md:text-6xl font-light bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-white">Master in Biomedical Engineering</CardTitle>
                    <CardDescription className="text-lg text-orange-400 mt-2">
                      Universidad Internacional de Valencia
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-blue-400/30 text-blue-400 bg-blue-400/5">
                    2023-2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Specialized in advanced manufacturing processes, finite element analysis, and product design. Thesis
                  focused on additive manufacturing optimization for medical applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-400/10 text-blue-400">
                    FEM Analysis
                  </Badge>
                  <Badge variant="secondary" className="bg-green-400/10 text-green-400">
                    CAD Design
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-400/10 text-purple-400">
                    Manufacturing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-white">
                      Bachelor's in Mechatronics Engineering
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-400 mt-2">Instituto Tecnológico de Durango</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-green-400/30 text-green-400 bg-green-400/5">
                    2018-2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive foundation in engineering principles, project management, and industrial processes.
                  Graduated with honors, focusing on automation and control systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-lime-400/10 text-lime-400">
                    Automation
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-400/10 text-orange-400">
                    Project Management
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-400/10 text-cyan-400">
                    Control Systems
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black ">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <h2 className="text-3xl md:text-6xl font-light bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lime-400">
                  <Code className="w-6 h-6" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SolidWorks/Fusion 360</span>
                  <Badge variant="secondary" className="bg-lime-400/10 text-lime-400">
                    CSW Professional
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">3D Printing</span>
                  <Badge variant="secondary" className="bg-lime-400/10 text-lime-400">
                    Expert
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">FEM Analysis</span>
                  <Badge variant="secondary" className="bg-purple-400/10 text-purple-400">
                    Intermediate
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">CNC Programming</span>
                  <Badge variant="secondary" className="bg-purple-400/10 text-purple-400">
                    Intermediate
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Circuit Design</span>
                  <Badge variant="secondary" className="bg-purple-400/10 text-purple-400">
                    Intermediate
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-400">
                  <Palette className="w-6 h-6" />
                  Design Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">UI/UX Design</span>
                  <Badge variant="secondary" className="bg-blue-400/10 text-blue-400">
                    Advanced
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Product Design</span>
                  <Badge variant="secondary" className="bg-lime-400/10 text-lime-400">
                    Expert
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Prototyping</span>
                  <Badge variant="secondary" className="bg-lime-400/10 text-lime-400">
                    Expert
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Technical Drawing</span>
                  <Badge variant="secondary" className="bg-blue-400/10 text-blue-400">
                    Advanced
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">DICOM to STL</span>
                  <Badge variant="secondary" className="bg-purple-400/10 text-purple-400">
                    Intermediate
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-400">
                  <Briefcase className="w-6 h-6" />
                  Management Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Project Management</span>
                  <Badge variant="secondary" className="bg-purple-400/10 text-purple-400">
                    Advanced
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Team Leadership</span>
                  <Badge variant="secondary" className="bg-blue-400/10 text-blue-400">
                    Advanced
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Operations Direction</span>
                  <Badge variant="secondary" className="bg-purple-400/10 text-purple-400">
                    Advanced
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Quality Control</span>
                  <Badge variant="secondary" className="bg-blue-400/10 text-blue-400">
                    Advanced
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Process Optimization</span>
                  <Badge variant="secondary" className="bg-lime-400/10 text-lime-400">
                    Expert
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Platforms Section - New */}
      <section
        id="tools-and-platforms"
        className="py-0 md:py- px-4 sm:px-6 lg:px-8 bg-gradient-to-b to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 md:mb-12 justify-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent text-center">
              Tools & <span className="font-bold">Platforms</span>
            </h2>
          </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {/* Cell 1: Figma */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="mb-3">
                    <img src="fusion.png" alt="" height="40" width="60"/>
                </div>
              <span className="text-gray-300 text-sm md:text-base text-center">Fusion 360</span>
            </div>
            {/* Cell 2: GitHub */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="mb-3">
                    <img src="slicer.png" alt="" height="40" width="60"/>
                </div>
              <span className="text-gray-300 text-sm md:text-base text-center">3D Slicer</span>
            </div>
            {/* Cell 3: AWS/Cloud */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="mb-3">
                <img src="easyeda.png" alt="" height="40" width="60" />
            </div>
              <span className="text-gray-300 text-sm md:text-base text-center">Easy EDA</span>
            </div>
            {/* Cell 4: SQL/Database */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="mb-3">
                <img src="chitubox.png" alt="" height="40" width="60"/>
              </div>
              <span className="text-gray-300 text-sm md:text-base text-center">Chitubox</span>
            </div>
            {/* Cell 5: Microcontrollers/Embedded */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="mb-3">
                <img src="blender.png" alt="" height="40" width="60"/>
              </div>
              <span className="text-gray-300 text-sm md:text-base text-center">Blender</span>
            </div>
            {/* Cell 6: Robotics */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="mb-3">
                <img src="chatgpt.webp" alt="" height="40" width="60" />
              </div>
              <span className="text-gray-300 text-sm md:text-base text-center">Chat GPT</span>
            </div>
          </div> 
          <div className="mt-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {/* Cell 1: Figma */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="mb-3">
                    <img src="fusion.png" alt="" height="40" width="60"/>
                </div>
              <span className="text-gray-300 text-sm md:text-base text-center">Fusion 360</span>
            </div>
            {/* Cell 2: GitHub */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="mb-3">
                    <img src="slicer.png" alt="" height="40" width="60"/>
                </div>
              <span className="text-gray-300 text-sm md:text-base text-center">3D Slicer</span>
            </div>
            {/* Cell 3: AWS/Cloud */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="mb-3">
                <img src="easyeda.png" alt="" height="40" width="60" />
            </div>
              <span className="text-gray-300 text-sm md:text-base text-center">Easy EDA</span>
            </div>
            {/* Cell 4: SQL/Database */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="mb-3">
                <img src="chitubox.png" alt="" height="40" width="60"/>
              </div>
              <span className="text-gray-300 text-sm md:text-base text-center">Chitubox</span>
            </div>
            {/* Cell 5: Microcontrollers/Embedded */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="mb-3">
                <img src="blender.png" alt="" height="40" width="60"/>
              </div>
              <span className="text-gray-300 text-sm md:text-base text-center">Blender</span>
            </div>
            {/* Cell 6: Robotics */}
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="mb-3">
                <img src="chatgpt.webp" alt="" height="40" width="60" />
              </div>
              <span className="text-gray-300 text-sm md:text-base text-center">Chat GPT</span>
            </div>
          </div> 
          </div>
        </div>

        
        
        
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 px-4 bg-gradient-to-b  to-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <h2 className="text-4xl md:text-6xl font-light bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-white">CEO & Founder</CardTitle>
                    <CardDescription className="text-lg text-green-400 mt-2">RMS Innovation Industries</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="border-green-400/30 text-green-400 bg-green-400/5 mb-2">
                      2023-Present
                    </Badge>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">México</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Founder of a multidisciplinary innovation company with two specialized biomedical-focused divisions of four other divisions:
                    <br /> <br />
                    Medfacturing – Emerging division aiming to become a leader in the development of medical devices, prosthetics, and custom implants. Currently growing through specialized small-scale projects that integrate advanced design, biocompatible materials, and precision manufacturing.
                    <br /> <br />
                    Zahnfacturing – Established innovative dental laboratory specializing in 3D printing and high‑quality materials for the production of dental prosthetics such as crowns and implant-supported restorations. Expertise in converting CT scans (DICOM) to STL for the creation of surgical guides and implant planning models.
                    <br /> <br />
                    Driving innovation through the integration of digital workflows, additive manufacturing, and high‑precision milling, ensuring superior quality, fit, and clinical outcomes in both medical and dental applications.
                </p>
                <ul className="text-gray-400 space-y-2 mb-4">
                  <li>• Processed and produced over 1,000+ digital dental models through 3D scanning and printing</li>
                  <li>• Led 10+ full‑arch implant projects for edentulous patients, from digital planning to prosthesis delivery</li>
                  <li>• Designed and manufactured specialized dental accessories, including simulators, waxing tools, and custom devices</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-400/10 text-green-400">
                    3D Printing
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-400/10 text-blue-400">
                    Medical Devices
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-400/10 text-purple-400">
                    Team Leadership
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap">
                  <div>
                    <CardTitle className="text-2xl text-white">Manufacturing Engineer → Promoted to Operational Deputy Director</CardTitle>
                        <Badge
                        className="bg-blue-400/8 py-1 mt-3 w-full whitespace-normal break-words"
                        >
                        <span className="text-xs text-gray-300">
                            Promoted to Operational Deputy Director due to outstanding performance and measurable results in digital workflow implementation and production optimization.
                        </span>
                        </Badge>
                    <CardDescription className="text-lg text-blue-400 mt-2">Central Médica Santa Ana</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="border-blue-400/30 text-blue-400 bg-blue-400/5 mb-3">
                      2022-Present
                    </Badge>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">México</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                <br />Specialized in digital scanning and custom 3D design for dentistry, integrating advanced workflows for zirconia milling and other biocompatible materials such as PMMA and PEEK, as well as high‑precision 3D printing. Designed and manufactured custom dental prosthesis for implants and preoperative surgical guides, optimizing precision, efficiency, and clinical outcomes.                </p>
                <ul className="text-gray-400 space-y-2 mb-4">
                  <li>• Digital scanning and Custom 3D design for dentistry</li>
                  <li>• Designed custom dental prothesis for implants with digital workflow</li>
                  <li>• Implemented Digital workflow and improved efficiency overall</li>
                  <li>• Designed custom dental preoperatory guides and 3D printed them</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-400/10 text-blue-400">
                    3D printing
                  </Badge>
                  <Badge variant="secondary" className="bg-lime-400/10 text-lime-400">
                    Dental and tissue imaging
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-400/10 text-orange-400">
                    Process normalization
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-white">3D printing technician</CardTitle>
                    <CardDescription className="text-lg text-purple-400 mt-2">Centro de Innovación Tecnológica del ITD</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="border-purple-400/30 text-purple-400 bg-purple-400/5 mb-2">
                      2021-2022
                    </Badge>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">México</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  First professional experience focusing on product design and prototyping. Gained hands-on experience
                  with CAD software and additive manufacturing processes.
                </p>
                <ul className="text-gray-400 space-y-2 mb-4">
                  <li>• Created 10+ technical drawings and 3D models</li>
                  <li>• Assisted in prototype development and testing for the livestock industry and others</li>
                  <li>• Learned advanced SolidWorks techniques</li>
                  <li>• Learned 3D printing optimization and processes</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-400/10 text-purple-400">
                    CAD Design
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-400/10 text-cyan-400">
                    Prototyping
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-400/10 text-yellow-400">
                    Technical Drawing
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
            {/* Footer */}
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

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

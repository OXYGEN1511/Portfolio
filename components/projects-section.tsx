"use client";

import { ArrowUpRight, Github, ExternalLink, Smartphone, Server, Globe, Play, Layers } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { TiltCard } from "./tilt-card";

const projects = [
  {
    id: 1,
    title: "MDL Job Portal",
    subtitle: "Government Recruitment Platform & SBI ePay",
    description:
      "Developed and modernized a government recruitment and job portal for Mazagon Dock Shipbuilders Limited (MDL), covering candidate job applications, document verification, and full SBI ePay payment gateway integration with optimized deployment.",
    technologies: [".NET Core", "ASP.NET", "Web APIs", "React.js", "SQL Server", "SBI ePay"],
    liveUrl: null,
    githubUrl: "https://github.com/OXYGEN1511",
    category: "fullstack",
    featured: true,
    gradient: "from-blue-500/20 via-indigo-500/20 to-cyan-500/20",
    iconGradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Secure URL Shortener with Analytics",
    subtitle: "Spring Security & URL Redirection Engine",
    description:
      "Implemented high-performance URL redirection and path-based routing for public and private links. Built role-based access control (RBAC) using custom UserDetailsService and Spring Security, with real-time analytics tracking clicks and user activity.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker"],
    liveUrl: null,
    githubUrl: "https://github.com/OXYGEN1511",
    category: "backend",
    featured: true,
    gradient: "from-emerald-500/20 via-teal-500/20 to-green-500/20",
    iconGradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Government Enterprise Modernization",
    subtitle: "Mission-Critical Systems at Madgaon",
    description:
      "Modernization and maintenance of large-scale enterprise applications for a Government project at Madgaon. Developed high-throughput RESTful Web APIs, database-driven modules, IIS configuration, and automated CI/CD pipelines.",
    technologies: [".NET Core", "Java", "Spring Boot", "SQL Server", "IIS", "CI/CD"],
    liveUrl: null,
    githubUrl: "https://github.com/OXYGEN1511",
    category: "backend",
    featured: true,
    gradient: "from-purple-500/20 via-violet-500/20 to-pink-500/20",
    iconGradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "NeuraLink",
    subtitle: "Full Stack Social Application",
    description:
      "A scalable social networking platform built with Java Spring Boot backend and React.js frontend. Implements JWT & RBAC authentication, relational data persistence with PostgreSQL, and clean architecture.",
    technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "JWT & RBAC"],
    liveUrl: null,
    githubUrl: "https://github.com/OXYGEN1511",
    category: "fullstack",
    featured: false,
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    iconGradient: "from-orange-500 to-amber-500",
  },
  {
    id: 5,
    title: "Modern Developer Portfolio",
    subtitle: "Interactive Web Experience",
    description:
      "High-performance personal developer portfolio built with Next.js App Router, Tailwind CSS, TypeScript, and clean interactive micro-animations with zero bloat.",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/OXYGEN1511/Portfolio",
    category: "frontend",
    featured: false,
    gradient: "from-pink-500/20 to-rose-500/20",
    iconGradient: "from-pink-500 to-rose-500",
  },
];

const categories = [
  { id: "all", label: "All", icon: Layers },
  { id: "backend", label: "Backend & Enterprise", icon: Server },
  { id: "fullstack", label: "Full Stack", icon: Globe },
  { id: "frontend", label: "Frontend", icon: Smartphone },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Globe className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Selected Work
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <ScrollReveal delay={100}>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects that showcase my{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                expertise
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl">
              From mobile apps to full-stack platforms, each project represents my
              commitment to clean code and exceptional user experiences.
            </p>
          </ScrollReveal>

          {/* Filter tabs */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={150 + index * 75}
              direction="scale"
            >
              <TiltCard
                className={`h-full ${
                  project.featured && index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`h-full relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 group ${
                    hoveredProject === project.id
                      ? "border-primary/50 shadow-xl shadow-primary/10"
                      : "hover:border-primary/30"
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative p-6 md:p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        {project.category === "mobile" && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-chart-2/20 border border-primary/30 text-primary text-xs font-semibold mb-3">
                            <Play className="w-3 h-3" />
                            Published on Play Store
                          </div>
                        )}
                        <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Project icon */}
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.iconGradient} p-0.5 opacity-50 group-hover:opacity-100 transition-opacity`}
                      >
                        <div className="w-full h-full rounded-[10px] bg-background flex items-center justify-center">
                          {project.category === "mobile" ? (
                            <Smartphone className="w-5 h-5 text-foreground" />
                          ) : project.category === "backend" ? (
                            <Server className="w-5 h-5 text-foreground" />
                          ) : (
                            <Globe className="w-5 h-5 text-foreground" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs rounded-lg bg-secondary/70 text-secondary-foreground font-medium border border-border/50 hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-sm font-medium text-primary hover:bg-primary/20 transition-all group/link"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                          <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

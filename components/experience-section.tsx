"use client";

import { Briefcase, GraduationCap, ArrowUpRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";
import { TiltCard } from "./tilt-card";

const experiences = [
  {
    type: "work",
    period: "2025 - Present",
    title: "Software Developer",
    organization: "Eulogik",
    location: "Bhopal",
    organizationUrl: "https://www.linkedin.com/company/eulogik/",
    description:
      "Building and maintaining scalable backend services using Python and FastApi. Developing responsive frontend applications with React and Next.js.",
    highlights: [
      "Developed RESTful APIs serving 10K+ daily requests",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Optimized database queries improving response time by 60%",
      // "Mentored junior developers on best practices",
    ],
    technologies: ["Python", "FastApi", "React", "PostgreSQL", "Docker"],
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    type: "education",
    period: "2021 - 2025",
    title: "B.Tech in Computer Science",
    organization: "RGPV University",
    location: "Bhopal",
    organizationUrl: "#",
    description:
      "Focused on core computer science fundamentals including data structures, algorithms, database management, and software engineering principles.",
    highlights: [
      "Specialized in Software Engineering",
      "Completed multiple full-stack projects",
      "Active member of coding club",
      "Published app on Play Store during studies",
    ],
    technologies: ["DSA", "DBMS", "Software Engineering", "OS", "Networks"],
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-500/10 to-indigo-500/10",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Briefcase className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Experience & Education
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My professional journey
          </h3>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            A timeline of my career growth and educational background that shaped
            me into the developer I am today.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal
                key={index}
                delay={200 + index * 150}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 z-10">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${exp.gradient} p-0.5 shadow-lg`}
                    >
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        {exp.type === "work" ? (
                          <Briefcase className="w-4 h-4 text-foreground" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-foreground" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      index % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <TiltCard>
                      <div
                        className={`p-6 md:p-8 rounded-2xl border border-border bg-gradient-to-br ${exp.bgGradient} backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group`}
                      >
                        {/* Type badge & Period */}
                        <div
                          className={`flex flex-wrap items-center gap-3 mb-4 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.gradient} text-white`}
                          >
                            {exp.type === "work" ? (
                              <Briefcase className="w-3 h-3" />
                            ) : (
                              <GraduationCap className="w-3 h-3" />
                            )}
                            {exp.type === "work" ? "Work" : "Education"}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h4>

                        {/* Organization & Location */}
                        <div
                          className={`flex flex-wrap items-center gap-3 mb-4 text-sm ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <Link
                            href={exp.organizationUrl}
                            target="_blank"
                            className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium"
                          >
                            {exp.organization}
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <ul
                          className={`space-y-2 mb-6 ${
                            index % 2 === 0 ? "md:text-left" : ""
                          }`}
                        >
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} mt-1.5 flex-shrink-0`}
                              />
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div
                          className={`flex flex-wrap gap-2 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-xs rounded-lg bg-background/50 border border-border/50 text-secondary-foreground font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

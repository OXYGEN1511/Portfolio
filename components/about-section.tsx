"use client";

import { User, Code, Rocket, Coffee, Download, Zap, Target, Heart } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";
import { TiltCard } from "./tilt-card";

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Architecture & APIs",
      description: "Building scalable services with Java, Spring Boot, .NET Core, ASP.NET, and REST Web APIs",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Rocket,
      title: "Gov & Enterprise Delivery",
      description: "Modernizing government applications at Madgaon, job portals & SBI ePay payment integration",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Target,
      title: "200+ LeetCode & 5-Star",
      description: "Solved 200+ LeetCode problems & achieved 5-Star Problem Solving rating on HackerRank",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Heart,
      title: "Certified & Active",
      description: "Certified in Java & React (Udemy), Spring Boot (Scalar), and active GDSC member",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-64 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <User className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              About Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text content */}
          <div className="space-y-8">
            <ScrollReveal delay={100}>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Crafting digital experiences with{" "}
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  code & clean architecture
                </span>
              </h3>
            </ScrollReveal>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <ScrollReveal delay={200}>
                <p>
                  I&apos;m a Full-Stack Developer with a{" "}
                  <span className="text-foreground font-semibold">
                    B.Tech in Computer Science (GPA: 7.91/10)
                  </span>{" "}
                  from{" "}
                  <span className="text-foreground font-semibold">
                    Sagar Institute of Research and Technology Excellence
                  </span>
                  , Bhopal. I specialize in developing modern enterprise applications, robust Web APIs, and responsive frontends.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p>
                  At{" "}
                  <span className="text-foreground font-semibold">
                    Aroosha Technologies
                  </span>
                  , I contribute to government projects at Madgaon, modernizing and maintaining mission-critical applications using{" "}
                  <span className="text-foreground font-semibold">
                    .NET, ASP.NET Core, Web APIs, Java, and Spring Boot
                  </span>
                  , while managing CI/CD pipelines, IIS configuration, and SQL Server databases.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p>
                  Previously at{" "}
                  <span className="text-foreground font-semibold">Eulogik</span>,
                  I developed full-stack web solutions using{" "}
                  <span className="text-foreground font-semibold">
                    React.js, RESTful APIs, and relational databases
                  </span>
                  . With a strong grasp of JWT & RBAC security, OOP, and system design, I ensure clean, performant, and secure software delivery.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={500}>
              <a
                href="/Tusharray.Resume.pdf"
                download="Tusharray.Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-all group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </ScrollReveal>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <ScrollReveal key={index} delay={200 + index * 100} direction="scale">
                <TiltCard className="h-full">
                  <div
                    className={`h-full p-6 rounded-2xl border border-border bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:border-primary/30 transition-all duration-500`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-background/50 backdrop-blur-sm flex items-center justify-center mb-4 border border-border/50">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

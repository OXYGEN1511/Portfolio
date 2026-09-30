"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, Play, Sparkles } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { AnimatedCounter } from "./animated-counter";

const roles = [
  "Full-Stack Developer",
  "Java & Spring Boot Engineer",
  ".NET Core & Web API Developer",
  "React & Next.js Developer",
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-chart-2/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chart-3/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating code snippets */}
      <div className="absolute top-32 left-[10%] hidden lg:block">
        <div className="glass rounded-lg px-4 py-2 font-mono text-sm text-muted-foreground animate-float">
          <span className="text-chart-2">const</span> developer ={" "}
          <span className="text-primary">true</span>;
        </div>
      </div>
      <div className="absolute bottom-40 right-[10%] hidden lg:block">
        <div className="glass rounded-lg px-4 py-2 font-mono text-sm text-muted-foreground animate-float-delayed">
          <span className="text-chart-3">async</span> buildAmazingApps()
        </div>
      </div>
      <div className="absolute top-1/2 right-[5%] hidden xl:block">
        <div className="glass rounded-lg px-4 py-2 font-mono text-sm text-muted-foreground animate-float">
          {"{ "}
          <span className="text-chart-4">passion</span>: <span className="text-primary">100%</span>
          {" }"}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-foreground">
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
          <span className="block text-foreground mb-2 animate-fade-in-up stagger-1">
            Hi, I&apos;m a
          </span>
          <span className="relative inline-block animate-fade-in-up stagger-2">
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent animate-gradient">
              {displayText}
            </span>
            <span className="inline-block w-[3px] h-[0.8em] ml-1 bg-primary animate-pulse align-middle" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-3">
          Full-Stack Developer with hands-on experience in{" "}
          <span className="text-foreground font-semibold">Java, Spring Boot, React.js, .NET Core, Web APIs, and SQL</span>.
          Experienced in modernizing enterprise legacy applications, integrating third-party services, and delivering end-to-end scalable solutions with clean architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in-up stagger-4">
          <MagneticButton href="#projects" variant="primary">
            <Play className="w-4 h-4" />
            View My Work
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            <Mail className="w-4 h-4" />
            Get In Touch
          </MagneticButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16 animate-fade-in-up stagger-5">
          {[
            { value: 1, suffix: "+", label: "Years Experience" },
            { value: 200, suffix: "+", label: "LeetCode Solved" },
            { value: 5, suffix: "★", label: "HackerRank Solving" },
            { value: 10, suffix: "+", label: "Projects Completed" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 hover:bg-secondary/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center animate-fade-in-up stagger-6">
          {[
            { icon: Github, href: "https://github.com/OXYGEN1511", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/tushar-ray15/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:tusharray1511@gmail.com", label: "Email" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="p-3 rounded-xl glass hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

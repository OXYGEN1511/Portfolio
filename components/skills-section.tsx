"use client";

import { useState } from "react";
import {
  Database,
  Layout,
  Smartphone,
  Terminal,
  Server,
  Code2,
  Cpu,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { TiltCard } from "./tilt-card";

const skillCategories = [
  {
    category: "Backend & Enterprise",
    icon: Server,
    color: "from-orange-500 to-amber-500",
    bgColor: "from-orange-500/10 to-amber-500/10",
    items: [
      { name: "Java", level: 92 },
      { name: "Spring Boot", level: 90 },
      { name: ".NET Core / ASP.NET", level: 88 },
      { name: "Web APIs & REST", level: 92 },
      { name: "Hibernate & Dapper", level: 85 },
      { name: "Python", level: 82 },
    ],
    featured: true,
  },
  {
    category: "Frontend & Web",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
    ],
    featured: true,
  },
  {
    category: "Databases",
    icon: Database,
    color: "from-emerald-500 to-green-500",
    bgColor: "from-emerald-500/10 to-green-500/10",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "SQL Server", level: 86 },
      { name: "MySQL", level: 85 },
      { name: "SQL & Query Tuning", level: 90 },
    ],
    featured: false,
  },
  {
    category: "DevOps & Cloud",
    icon: Terminal,
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-500/10 to-violet-500/10",
    items: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 80 },
      { name: "CI/CD & IIS", level: 82 },
      { name: "Postman, AWS & Azure", level: 78 },
    ],
    featured: false,
  },
  {
    category: "Architecture & Security",
    icon: Cpu,
    color: "from-cyan-500 to-teal-500",
    bgColor: "from-cyan-500/10 to-teal-500/10",
    items: [
      { name: "JWT & RBAC Security", level: 90 },
      { name: "Clean Architecture", level: 88 },
      { name: "OOP Fundamentals", level: 92 },
      { name: "System Design", level: 80 },
    ],
    featured: false,
  },
  {
    category: "Problem Solving & DSA",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-500/10 to-rose-500/10",
    items: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "LeetCode (200+ Solved)", level: 90 },
      { name: "5-Star HackerRank Solving", level: 92 },
    ],
    featured: false,
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="space-y-2"
      ref={(el) => {
        if (el) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
                observer.disconnect();
              }
            },
            { threshold: 0.5 }
          );
          observer.observe(el);
        }
      }}
    >
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-chart-2/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Code2 className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Technical Skills
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technologies I work with
          </h3>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Specialized in building full-stack applications with a focus on performance,
            scalability, and clean architecture.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
          {skillCategories.map((skill, index) => (
            <ScrollReveal
              key={skill.category}
              delay={150 + index * 75}
              direction="scale"
            >
              <TiltCard
                className={`h-full ${skill.featured ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div
                  className={`h-full relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 cursor-pointer group ${
                    activeCategory === skill.category
                      ? "border-primary/50 shadow-lg shadow-primary/10"
                      : "hover:border-primary/30"
                  }`}
                  onMouseEnter={() => setActiveCategory(skill.category)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute inset-[-1px] rounded-2xl bg-gradient-to-r ${skill.color} blur-sm opacity-30`}
                    />
                  </div>

                  <div
                    className={`relative h-full p-6 flex flex-col ${
                      skill.featured ? "md:p-8" : ""
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} p-0.5 ${
                          skill.featured ? "w-14 h-14" : "w-10 h-10"
                        }`}
                      >
                        <div className="w-full h-full rounded-[10px] bg-background flex items-center justify-center">
                          <skill.icon
                            className={`text-foreground ${
                              skill.featured ? "w-7 h-7" : "w-5 h-5"
                            }`}
                          />
                        </div>
                      </div>
                      {skill.featured && (
                        <div className="flex items-center gap-1 text-xs text-primary">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Category name */}
                    <h4
                      className={`font-bold text-foreground mb-4 ${
                        skill.featured ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {skill.category}
                    </h4>

                    {/* Skills */}
                    {skill.featured ? (
                      <div className="flex-1 space-y-4">
                        {skill.items.map((item, i) => (
                          <SkillBar
                            key={item.name}
                            name={item.name}
                            level={item.level}
                            delay={i * 100}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item.name}
                            className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-secondary-foreground font-medium hover:bg-secondary transition-colors"
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>
                    )}
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

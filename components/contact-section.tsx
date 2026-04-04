"use client";

import { Github, Linkedin, Mail, Twitter, Send, MapPin, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { TiltCard } from "./tilt-card";
import { MagneticButton } from "./magnetic-button";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@yourusername",
    href: "https://github.com/OXYGEN1511",
    icon: Github,
    gradient: "from-gray-500 to-gray-600",
    bgGradient: "from-gray-500/10 to-gray-600/10",
  },
  {
    name: "LinkedIn",
    handle: "Tushar Ray",
    href: "https://www.linkedin.com/in/tushar-ray15/",
    icon: Linkedin,
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-500/10 to-blue-600/10",
  },
  // {
  //   name: "Twitter",
  //   handle: "@yourusername",
  //   href: "https://twitter.com",
  //   icon: Twitter,
  //   gradient: "from-sky-400 to-sky-500",
  //   bgGradient: "from-sky-400/10 to-sky-500/10",
  // },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "tusharray1511@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-chart-2/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Get in Touch
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
        </ScrollReveal>

        {/* Main content */}
        <ScrollReveal delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Open to opportunities
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                great together
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I&apos;m currently open to new opportunities and exciting projects.
              Whether you have a question, want to collaborate, or just want to
              say hello, I&apos;d love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        {/* Email CTA */}
        <ScrollReveal delay={200}>
          <div className="flex flex-col items-center gap-6 mb-16">
            <MagneticButton href={`mailto:${email}`} variant="primary">
              <Send className="w-5 h-5" />
              Send me an email
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary/50 border border-border">
              <span className="text-sm font-mono text-muted-foreground">
                {email}
              </span>
              <button
                onClick={copyEmail}
                className="p-2 rounded-lg hover:bg-secondary transition-colors group"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Social links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {socialLinks.map((social, index) => (
            <ScrollReveal key={social.name} delay={300 + index * 100} direction="scale">
              <TiltCard>
                <Link
                  href={social.href}
                  target="_blank"
                  className={`block p-6 rounded-2xl border border-border bg-gradient-to-br ${social.bgGradient} backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${social.gradient} text-white shadow-lg`}
                    >
                      <social.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.handle}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </Link>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Location */}
        <ScrollReveal delay={600}>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Based in India</span>
            <span className="text-muted-foreground/50">|</span>
            <span className="text-sm">Available for Remote Work</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

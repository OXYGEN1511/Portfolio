"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/OXYGEN1511", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tushar-ray15/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:tusharray1511@gmail.com", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-6 border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold">
              <span className="text-foreground">Tushar Ray</span>
              <span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Full-Stack Developer specializing in Java, Spring Boot, React.js, .NET Core, Web APIs, and SQL.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="p-2.5 rounded-xl bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <a href="mailto:tusharray1511@gmail.com" className="hover:text-primary transition-colors">
                  tusharray1511@gmail.com
                </a>
              </p>
              <p>Bhopal, Madhya Pradesh, India</p>
              <p className="text-primary font-medium">Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Tushar Ray. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

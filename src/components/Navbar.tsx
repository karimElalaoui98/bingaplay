"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
      }
    }
  };

  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      // Add scroll trigger for navbar background
      ScrollTrigger.create({
        start: "top+=800 top",
        onUpdate: (self) => {
          if (navRef.current) {
            if (self.progress > 0) {
              navRef.current.classList.add("nav-scrolled");
            } else {
              navRef.current.classList.remove("nav-scrolled");
            }
          }
        },
      });

      // Animate nav items on mount
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Hover animation for nav items
      const navItems = document.querySelectorAll(".nav-item");
      navItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            y: -2,
            duration: 0.2,
            ease: "power2.out",
          });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed z-20 py-4 w-full transition-colors duration-300"
    >
      <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4 text-white">
        <div className="text-sm tracking-widest font-semibold">BINGAPLAY</div>
        <nav className="hidden gap-8 text-sm opacity-90 md:flex">
          <a
            onClick={(e) => scrollToSection(e, "products")}
            className="nav-item cursor-pointer hover:opacity-100"
          >
            Products
          </a>
          <a
            onClick={(e) => scrollToSection(e, "about")}
            className="nav-item cursor-pointer hover:opacity-100"
          >
            À propos
          </a>
          <a
            onClick={(e) => scrollToSection(e, "blogs")}
            className="nav-item cursor-pointer hover:opacity-100"
          >
            Blogs
          </a>
          <a
            onClick={(e) => scrollToSection(e, "contact")}
            className="nav-item cursor-pointer hover:opacity-100"
          >
            Nous contacter
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="nav-item hidden text-sm opacity-90 hover:opacity-100 md:inline-block cursor-pointer">
            Se connecter
          </button>
          <button className="nav-item rounded-full bg-gradient-to-br from-green-500 to-lime-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:shadow-blue-500/30 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

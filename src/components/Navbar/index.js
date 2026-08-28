import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contacts", href: "#contacts" },
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const sections = navItems.map((item) => item.href.substring(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 shadow-xl shadow-black/50">
        <Link
          href="#about"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-rose-500 font-bold text-xs hover:border-rose-600/60 hover:text-rose-400 transition-colors"
          title="Sergey Skorokhod"
        >
          SS
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-neutral-800/90 text-white shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

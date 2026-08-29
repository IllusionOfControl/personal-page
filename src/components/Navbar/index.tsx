import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useTheme } from "@/context/ThemeContext";

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
  { label: "Uses", href: "/uses" },
  { label: "Now", href: "/now" },
];

const NavBar: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800/80 shadow-lg shadow-black/5 dark:shadow-black/60 transition-colors duration-200">
        <Link
          href="/"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-rose-600 dark:text-rose-500 font-bold text-xs hover:border-rose-500/60 transition-colors"
          title="Sergey Skorokhod"
        >
          SS
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? currentPath === "/"
                : currentPath === item.href ||
                  currentPath.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-neutral-200/90 dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Theme toggle button */}
        <div className="border-l border-neutral-200 dark:border-neutral-800 pl-1 sm:pl-1.5 ml-0.5 sm:ml-1">
          <button
            onClick={toggleTheme}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-neutral-600 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
            title={mounted && theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <FaSun size={13} className="text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <FaMoon size={13} className="text-neutral-700 hover:-rotate-12 transition-transform duration-300" />
              )
            ) : (
              <div className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

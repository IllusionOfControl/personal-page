import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaSun,
  FaMoon,
  FaHouse,
  FaLaptopCode,
  FaBookOpen,
  FaDesktop,
  FaClock,
} from "react-icons/fa6";
import { useTheme } from "@/context/ThemeContext";
import { getDictionary } from "@/locales";

const NavBar: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const currentLocale = router.locale || "en";
  const dict = getDictionary(currentLocale);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: dict.nav.about, href: "/", icon: FaHouse },
    { label: dict.nav.projects, href: "/projects", icon: FaLaptopCode },
    { label: dict.nav.articles, href: "/articles", icon: FaBookOpen },
    { label: dict.nav.uses, href: "/uses", icon: FaDesktop },
    { label: dict.nav.now, href: "/now", icon: FaClock },
  ];


  return (
    <>
      {/* Mobile Top Header (Logo + Language & Theme controls) */}
      <header className="fixed top-3 left-0 right-0 z-40 px-4 md:hidden">
        <div className="mx-auto max-w-md flex items-center justify-between px-3.5 py-2 rounded-full bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800/80 shadow-md shadow-black/5 dark:shadow-black/50 transition-colors duration-200">
          <Link
            href="/"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-rose-600 dark:text-rose-500 font-bold text-sm hover:border-rose-500/60 transition-colors"
            title="Sergey Skorokhod"
          >
            SS
          </Link>

          <div className="flex items-center gap-2">
            {/* Language Switcher (Segmented Control) */}
            <div
              className="flex items-center p-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-xs font-mono font-medium"
              role="group"
              aria-label="Language selection"
            >
              <Link
                href={router.asPath}
                locale="ru"
                className={`px-3 py-1 rounded-full transition-all duration-150 ${
                  currentLocale === "ru"
                    ? "bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 font-bold shadow-xs"
                    : "text-neutral-600 dark:text-neutral-300 font-medium hover:text-neutral-950 dark:hover:text-white"
                }`}
                title="Русский"
              >
                RU
              </Link>
              <Link
                href={router.asPath}
                locale="en"
                className={`px-3 py-1 rounded-full transition-all duration-150 ${
                  currentLocale === "en"
                    ? "bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 font-bold shadow-xs"
                    : "text-neutral-600 dark:text-neutral-300 font-medium hover:text-neutral-950 dark:hover:text-white"
                }`}
                title="English"
              >
                EN
              </Link>
            </div>

            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full text-neutral-600 dark:text-neutral-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
              title={
                mounted && theme === "dark"
                  ? dict.nav.switchThemeLight
                  : dict.nav.switchThemeDark
              }
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <FaSun
                    size={16}
                    className="text-amber-400 hover:rotate-45 transition-transform duration-300"
                  />
                ) : (
                  <FaMoon
                    size={16}
                    className="text-neutral-700 hover:-rotate-12 transition-transform duration-300"
                  />
                )
              ) : (
                <div className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-3 left-0 right-0 z-40 px-3 md:hidden"
      >
        <div className="mx-auto max-w-md flex items-center justify-around px-1 py-1 rounded-2xl bg-white/90 dark:bg-neutral-950/90 backdrop-blur-lg border border-neutral-200/90 dark:border-neutral-800/80 shadow-xl shadow-black/10 dark:shadow-black/60 transition-colors duration-200">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? currentPath === "/"
                : currentPath === item.href ||
                  currentPath.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-rose-600 dark:text-rose-400 font-semibold"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400"
                      : ""
                  }`}
                >
                  <Icon size={18} />
                </div>
                <span className="text-[11px] leading-tight mt-0.5 tracking-tight truncate whitespace-nowrap max-w-[64px] text-center font-medium">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Floating Pill Navbar */}
      <header className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw]">
        <nav className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800/80 shadow-lg shadow-black/5 dark:shadow-black/60 transition-colors duration-200">
          <Link
            href="/"
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-rose-600 dark:text-rose-500 font-bold text-xs hover:border-rose-500/60 transition-colors"
            title="Sergey Skorokhod"
          >
            SS
          </Link>
          <div className="flex items-center gap-1">
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
                  className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
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

          {/* Action controls (Language & Theme) */}
          <div className="shrink-0 flex items-center border-l border-neutral-200 dark:border-neutral-800 pl-2 ml-1.5 gap-1.5">
            {/* Language Switcher (Segmented Control) */}
            <div
              className="flex items-center p-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-xs font-mono font-medium"
              role="group"
              aria-label="Language selection"
            >
              <Link
                href={router.asPath}
                locale="ru"
                className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
                  currentLocale === "ru"
                    ? "bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 font-bold shadow-xs"
                    : "text-neutral-600 dark:text-neutral-300 font-medium hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
                title="Русский"
              >
                RU
              </Link>
              <Link
                href={router.asPath}
                locale="en"
                className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
                  currentLocale === "en"
                    ? "bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 font-bold shadow-xs"
                    : "text-neutral-600 dark:text-neutral-300 font-medium hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
                title="English"
              >
                EN
              </Link>
            </div>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-600 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
              title={
                mounted && theme === "dark"
                  ? dict.nav.switchThemeLight
                  : dict.nav.switchThemeDark
              }
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <FaSun
                    size={14}
                    className="text-amber-400 hover:rotate-45 transition-transform duration-300"
                  />
                ) : (
                  <FaMoon
                    size={14}
                    className="text-neutral-700 hover:-rotate-12 transition-transform duration-300"
                  />
                )
              ) : (
                <div className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

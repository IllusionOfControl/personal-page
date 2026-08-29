import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
  { label: "Uses", href: "/uses" },
  { label: "Now", href: "/now" },
];

const NavBar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80 shadow-xl shadow-black/60">
        <Link
          href="/"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-rose-500 font-bold text-xs hover:border-rose-600/60 hover:text-rose-400 transition-colors"
          title="Sergey Skorokhod"
        >
          SS
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? currentPath === "/"
                : currentPath === item.href || currentPath.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-neutral-800 text-white shadow-sm font-semibold"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/70"
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

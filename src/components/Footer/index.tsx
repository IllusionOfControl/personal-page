import React from "react";
import { useRouter } from "next/router";
import { getDictionary } from "@/locales";

const Footer: React.FC = () => {
  const router = useRouter();
  const dict = getDictionary(router.locale || "en");

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800/80 py-6 pb-24 md:pb-6 bg-white/80 dark:bg-neutral-950/80 text-xs text-neutral-600 dark:text-neutral-400 transition-colors">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>{dict.footer.rights}</p>
        <div className="flex items-center gap-4 font-medium">
          <a
            href="https://github.com/IllusionOfControl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/skorokhod-sergey/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-neutral-400 dark:text-neutral-500">
            · {dict.footer.handcrafted}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

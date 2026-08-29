const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-800/80 py-6 bg-neutral-950/80 text-xs text-neutral-400">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© 2026 Sergey Skorokhod. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/IllusionOfControl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/skorokhod-sergey/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition-colors"
          >
            LinkedIn
          </a>
          <span>· Handcrafted with ❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

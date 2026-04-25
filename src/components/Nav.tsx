import { useState, useEffect } from "react";

export const Nav = ({ isDarkMode, onToggle }: { isDarkMode?: boolean; onToggle?: () => void } = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const useLight = !isScrolled && isDarkMode;

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
      <div
        className={`flex w-full max-w-5xl items-center justify-between gap-6 rounded-full px-3 py-2 transition-all duration-500 ease-out md:w-auto md:justify-center md:px-4 ${
          isScrolled
            ? "border border-black/8 bg-[#f6f3ec]/86 shadow-[0_18px_50px_rgba(20,17,13,0.12)] backdrop-blur-xl"
            : "border border-transparent bg-transparent shadow-none"
        }`}
      >
        <a
          href="/"
          className="flex flex-shrink-0 items-center gap-2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8BD3F]"
          aria-label="Superweb home"
        >
          <img
            src="/icon.png"
            alt=""
            width="30"
            height="30"
            className="w-8 h-8"
          />
          <span className={`text-lg font-semibold transition-colors duration-500 ${
            useLight ? "text-[#f6f3ec]" : "text-[#101113]"
          }`}>superweb</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-full px-1 text-sm font-semibold transition-colors duration-500 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8BD3F] ${
                useLight
                  ? "text-[#f6f3ec]/72 hover:text-[#f6f3ec]"
                  : "text-[#101113]/62 hover:text-[#101113]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {onToggle && (
            <label className="inline-flex cursor-pointer items-center" aria-label="Toggle color theme">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={onToggle}
                className="sr-only peer"
              />
              <div className={`relative h-6 w-11 rounded-full transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#E8BD3F] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-black/10 after:bg-white after:transition-transform after:content-[''] peer-checked:after:translate-x-full ${
                useLight ? "bg-white/24 peer-checked:bg-white/42" : "bg-black/10 peer-checked:bg-[#101113]"
              }`} />
            </label>
          )}
          <a
            href="#contact"
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8BD3F] active:translate-y-px ${
              useLight
                ? "bg-[#f6f3ec] text-[#101113] hover:bg-white"
                : "bg-[#101113] text-[#f6f3ec] hover:bg-[#24211c]"
            }`}
          >
            Book a call
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`grid h-10 w-10 place-items-center rounded-full transition-colors duration-500 md:hidden ${
            useLight ? "text-[#f6f3ec]/80 hover:text-[#f6f3ec]" : "text-[#101113]/70 hover:text-[#101113]"
          }`}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 space-y-3 rounded-xl border border-black/10 bg-[#f6f3ec]/94 p-4 shadow-[0_18px_50px_rgba(20,17,13,0.16)] backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-2 py-2 text-sm font-semibold text-[#101113]/70 transition-colors hover:bg-[#101113]/5 hover:text-[#101113]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-full bg-[#101113] px-5 py-2.5 text-center text-sm font-semibold text-[#f6f3ec] transition-colors hover:bg-[#24211c]"
          >
            Book a call
          </a>
        </div>
      )}
    </nav>
  );
};

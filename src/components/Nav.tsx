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

  // Light text only when not scrolled AND in dark mode
  const useLight = !isScrolled && isDarkMode;

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
      <div
        className={`flex items-center gap-6 rounded-full px-4 py-2 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 border border-gray-200/50"
            : "bg-transparent border border-transparent shadow-none"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex-shrink-0 flex items-center gap-2">
          <img
            src="/icon.png"
            alt="Logo"
            width="30"
            height="30"
            className="w-8 h-8"
          />
          <span className={`text-lg font-light transition-colors duration-500 ${
            useLight ? "text-white" : "text-gray-900"
          }`}>superweb</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-500 whitespace-nowrap ${
                useLight
                  ? "text-white/80 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: Toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {onToggle && (
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={onToggle}
                className="sr-only peer"
              />
              <div className={`relative w-11 h-6 rounded-full peer after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white ${
                useLight ? "bg-white/30 peer-checked:bg-white/50" : "bg-gray-200 peer-checked:bg-gray-600"
              }`} />
            </label>
          )}
          <a
            href="#contact"
            className={`px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-500 whitespace-nowrap ${
              useLight
                ? "bg-white text-gray-900 hover:bg-white/90"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            Book a call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-500 ${
            useLight ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 md:hidden bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Book a call
          </a>
        </div>
      )}
    </nav>
  );
};

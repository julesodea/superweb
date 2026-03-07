import { useState, useEffect } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "#faq" },
  ];

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
          <span className="text-lg font-light text-gray-900">superweb</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: Language + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="w-9 h-9 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center">
            En
          </button>
          <a
            href="/contact"
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Book a call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
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
              className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="block text-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Book a call
          </a>
        </div>
      )}
    </nav>
  );
};

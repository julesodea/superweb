import { useState } from "react";
import Button from "./Button";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="sticky top-0 z-90 w-full bg-white/80 backdrop-blur-sm">
        <div className="mx-4 my-4">
          <div className="flex items-center justify-between px-2">
            {/* Logo and Brand */}
            <a href="/" className="flex items-center">
              <div className="pr-2">
                <img
                  src="/icon.png"
                  alt="test"
                  width="30"
                  height="30"
                  className="w-8 h-8"
                />
              </div>
              <h1 className="text-xl font-light">superweb</h1>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Products
              </a>
              <a
                href="/component-land"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Resources
              </a>
              <a
                href="/pricing"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing
              </a>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a href="/contact">
                <Button className="group" variant="light">
                  Let's connect{" "}
                  <img
                    src="/arrow-right.svg"
                    alt="arrow right"
                    width={15}
                    height={15}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Button>
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
            <div className="md:hidden border-t border-b py-4 px-2 space-y-4">
              <a
                href="/"
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Products
              </a>
              <a
                href="/"
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Solutions
              </a>
              <a
                href="/component-land"
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Resources
              </a>
              <a
                href="/pricing"
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Pricing
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

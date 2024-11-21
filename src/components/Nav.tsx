import React, { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
        <div className="border rounded-lg shadow-sm mx-4 my-4">
          <div className="flex items-center justify-between p-2">
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
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Solutions
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
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:3px_3px_rgb(40_40_40)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(40_40_40)]">
                Book A Demo
              </button>
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
            <div className="md:hidden border-t py-4 px-2 space-y-4">
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
              <button className="w-full group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:3px_3px_rgb(40_40_40)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(40_40_40)]">
                Book A Demo
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

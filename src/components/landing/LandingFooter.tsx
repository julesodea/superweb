const LandingFooter = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <footer
      className={`mt-auto px-4 py-10 transition-colors duration-300 ${
        isDarkMode ? "text-[#f6f3ec]/48" : "text-[#101113]/58"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl border-t pt-8 ${
          isDarkMode ? "border-white/8" : "border-[#101113]/10"
        }`}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/icon.png"
                alt=""
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <h3
                className={`text-2xl font-black ${
                  isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
                }`}
              >
                superweb
              </h3>
            </div>
            <p
                className={`max-w-xs text-sm leading-6 ${
                  isDarkMode ? "text-[#f6f3ec]/48" : "text-[#101113]/58"
                }`}
            >
              We make the web a super place for the future.
            </p>
          </div>

          <div>
            <h3
              className={`mb-4 text-sm font-black ${
                isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
              }`}
            >
              Navigation
            </h3>
            <ul
              className={`space-y-2 text-sm ${
                isDarkMode ? "text-[#f6f3ec]/48" : "text-[#101113]/58"
              }`}
            >
              <li>
                <a href="#services" className="transition-colors hover:text-[#e8bd3f]">
                  Services
                </a>
              </li>
              <li>
                <a href="#results" className="transition-colors hover:text-[#e8bd3f]">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#e8bd3f]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className={`mb-4 text-sm font-black ${
                isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
              }`}
            >
              Contact Us
            </h3>
            <ul
              className={`space-y-2 text-sm ${
                isDarkMode ? "text-[#f6f3ec]/48" : "text-[#101113]/58"
              }`}
            >
              <li>Email: hi@superweb.co</li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-8 pt-4 text-left text-xs ${
            isDarkMode ? "text-[#f6f3ec]/34" : "text-[#101113]/42"
          }`}
        >
          <p>&copy; {new Date().getFullYear()} superweb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;

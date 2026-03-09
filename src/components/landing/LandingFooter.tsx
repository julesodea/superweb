const LandingFooter = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <footer
      className={`py-8 px-4 mt-auto transition-colors duration-300 ${
        isDarkMode ? "text-slate-500" : "text-neutral-600"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/icon.png"
                alt="superweb logo"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <h3
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-neutral-950"
                }`}
              >
                superweb
              </h3>
            </div>
            <p
              className={`text-sm ${
                isDarkMode ? "text-slate-500" : "text-neutral-600"
              }`}
            >
              We make the web a super place for the future.
            </p>
          </div>

          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? "text-slate-300" : "text-neutral-800"
              }`}
            >
              Quick Links
            </h3>
            <ul
              className={`space-y-2 text-sm ${
                isDarkMode ? "text-slate-500" : "text-neutral-600"
              }`}
            >
              <li>
                <a href="#services" className="hover:underline transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#results" className="hover:underline transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? "text-slate-300" : "text-neutral-800"
              }`}
            >
              Contact Us
            </h3>
            <ul
              className={`space-y-2 text-sm ${
                isDarkMode ? "text-slate-500" : "text-neutral-600"
              }`}
            >
              <li>Email: hi@superweb.co</li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-8 pt-4 text-left text-xs ${
            isDarkMode ? "text-slate-600" : "text-neutral-500"
          }`}
        >
          <p>&copy; {new Date().getFullYear()} superweb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;

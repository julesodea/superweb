export const Footer = () => {
  return (
    <footer className="text-neutral-600 py-8 mt-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl mb-4 font-bold text-neutral-950">
              superweb
            </h3>
            <p className="text-sm text-neutral-600">
              We make the web a super place for the future.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Email: hi@superweb.co</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} superweb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

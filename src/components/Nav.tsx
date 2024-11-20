export const Nav = () => {
  return (
    <nav>
      <div>
        <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
          <div className="border rounded-lg shadow-sm mx-4 my-4 lg:mx-auto lg:max-w-7xl">
            <div className="flex items-center justify-between px-6 py-4">
              <a href="/">
                <div className="flex items-center">
                  <div className="pr-2">
                    <img src="/icon.png" alt="test" width="30" height="30" />
                  </div>
                  <h1 className="text-xl font-bold">Websuperb</h1>
                </div>
              </a>

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
                  href="/"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Resources
                </a>
                <a
                  href="/"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Pricing
                </a>
              </div>

              <div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-800 text-white px-6 py-4 text-base font-semibold hover:bg-black/90 transition-colors"
                >
                  Book a Demo
                </a>
              </div>
              {/* <Button client:load /> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

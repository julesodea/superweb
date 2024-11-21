export const PriceGrid = () => {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {/* One-off Card */}
        <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full">
                One off
              </span>
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-100 text-red-600 rounded-full">
                Now Booking for Q4
              </span>
            </div>
            <div className="text-5xl font-bold">$2497</div>
            <p className="text-gray-500">
              Launch your dream site in days, not months.
            </p>
            <p className="text-xl">
              Perfect for single, high-impact, conversion-focused landing page.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            {/* <div className="rounded-lg bg-gray-50 p-4"> */}
            {/* <div className="flex items-center gap-3">
                <img
                  src="/placeholder.svg"
                  alt="Avatar"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm text-gray-500">
                    Co-Founder & CEO at Company
                  </p>
                </div>
              </div>
              <p className="mt-2">Excellent, patient, professional, quick.</p>
            </div> */}
            <button className="w-full bg-gray-900 text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors">
              Secure your 2025 Spot
            </button>
            <div className="space-y-4">
              <h3 className="font-semibold">Features:</h3>
              <ul className="space-y-3">
                {[
                  "Free Copywriting",
                  "4 Hero iterations",
                  "Kick-off strategy call",
                  "2x rounds of revisions",
                  "Updates every 48 hours",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    {/* <Check className="h-5 w-5 text-gray-500" /> */}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Retainer Card */}
        <div className="relative overflow-hidden rounded-lg bg-black text-white p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-800 text-white rounded-full">
                Retainer
              </span>
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-100 text-red-600 rounded-full">
                Now Booking for Q4
              </span>
            </div>
            <div className="text-5xl font-bold">$4497</div>
            <p className="text-gray-400">
              Billed monthly. Pause / Cancel anytime
            </p>
            <p className="text-xl">
              Ideal for those who need an ongoing design/development support.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            {/* <div className="rounded-lg bg-gray-900 p-4">
              <div className="flex items-center gap-3">
                <img
                  src="/placeholder.svg"
                  alt="Avatar"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-sm text-gray-400">Founder at Company</p>
                </div>
              </div>
              <p className="mt-2">Phenomenal, fast, great designs.</p>
            </div> */}
            <button className="w-full bg-white text-black text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
              Secure your 2025 Spot
            </button>
            <div className="space-y-4">
              <h3 className="font-semibold">Features:</h3>
              <ul className="space-y-3">
                {[
                  "Full service",
                  "Upto 60 hours/month",
                  "Updates every 48 hours",
                  "Unlimited brands/users",
                  "Expert project management",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    {/* <Check className="h-5 w-5 text-gray-400" /> */}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

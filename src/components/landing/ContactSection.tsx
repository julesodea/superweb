import { useState } from "react";
import Button from "../Button";
import SectionWrapper from "./SectionWrapper";

const ContactSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const form = e.currentTarget;
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium bg-[#FCD34D] text-black">
                Contact
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-slate-800"
                }`}
              >
                Let's talk
              </h2>
              <p
                className={`text-lg mb-6 ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Tell us about your project. We respond within 24 hours.
              </p>
              <div
                className={`space-y-3 text-sm ${
                  isDarkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                <p>No commitment required</p>
                <p>Free strategy advice included</p>
                <p>We'll tell you honestly if we're not the right fit</p>
              </div>
            </div>

            <div>
              {status === "success" ? (
                <div
                  className={`rounded-2xl p-8 text-center ${
                    isDarkMode ? "bg-slate-800/50" : "bg-neutral-50"
                  }`}
                >
                  <h3
                    className={`text-2xl font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    Message sent!
                  </h3>
                  <p className={isDarkMode ? "text-slate-400" : "text-slate-500"}>
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="landing-email"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-slate-300" : "text-gray-700"
                      }`}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="landing-email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-xl border transition focus:outline-none focus:ring-2 ${
                        isDarkMode
                          ? "bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 focus:ring-slate-500"
                          : "bg-white border-gray-300 text-slate-800 placeholder-gray-400 focus:ring-slate-400"
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="landing-message"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-slate-300" : "text-gray-700"
                      }`}
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="landing-message"
                      name="message"
                      required
                      placeholder="What are you building? What's the timeline?"
                      className={`w-full px-4 py-3 rounded-xl border min-h-[150px] resize-none transition focus:outline-none focus:ring-2 ${
                        isDarkMode
                          ? "bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 focus:ring-slate-500"
                          : "bg-white border-gray-300 text-slate-800 placeholder-gray-400 focus:ring-slate-400"
                      }`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button type="submit" variant={isDarkMode ? "light" : "dark"}>
                    {status === "submitting" ? "Sending..." : "Send Message"}
                    <img
                      src="/arrow-right.svg"
                      alt="arrow right"
                      width={15}
                      height={15}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default ContactSection;

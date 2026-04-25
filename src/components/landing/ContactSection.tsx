import { useState } from "react";
import Button from "../Button";
import SectionWrapper from "./SectionWrapper";

const ContactSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement;
  }) => {
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
    <section id="contact" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <div
            className={`grid gap-10 rounded-xl p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10 ${
              isDarkMode
                ? "border border-white/8 bg-white/[0.04]"
                : "border border-[#101113]/8 bg-white/55"
            }`}
          >
            <div>
              <span className="mb-6 inline-block rounded-md bg-[#e8bd3f] px-3 py-1.5 text-sm font-black text-[#101113]">
                Contact
              </span>
              <h2
                className={`text-balance mb-5 text-4xl font-black leading-none md:text-6xl ${
                  isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
                }`}
              >
                Tell us what needs to ship.
              </h2>
              <p
                className={`mb-8 max-w-md text-lg leading-8 ${
                  isDarkMode ? "text-[#f6f3ec]/62" : "text-[#101113]/62"
                }`}
              >
                Send the goal, timeline, and any messy context. We respond
                within one business day.
              </p>
              <div
                className={`grid gap-3 text-sm ${
                  isDarkMode ? "text-[#f6f3ec]/48" : "text-[#101113]/52"
                }`}
              >
                <p>No commitment required</p>
                <p>Practical strategy advice included</p>
                <p>We'll tell you honestly if we're not the right fit</p>
              </div>
            </div>

            <div>
              {status === "success" ? (
                <div
                  className={`rounded-lg p-8 text-center ${
                    isDarkMode ? "bg-[#101113]/55" : "bg-white/70"
                  }`}
                >
                  <h3
                    className={`mb-2 text-2xl font-black ${
                      isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
                    }`}
                  >
                    Message sent.
                  </h3>
                  <p className={isDarkMode ? "text-[#f6f3ec]/58" : "text-[#101113]/62"}>
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="landing-email"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-[#f6f3ec]/70" : "text-[#101113]/72"
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
                      className={`w-full rounded-lg border px-4 py-3 transition focus:outline-none focus:ring-2 ${
                        isDarkMode
                          ? "border-white/10 bg-[#101113]/65 text-[#f6f3ec] placeholder:text-[#f6f3ec]/34 focus:ring-[#e8bd3f]"
                          : "border-[#101113]/12 bg-white text-[#101113] placeholder:text-[#101113]/34 focus:ring-[#e8bd3f]"
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="landing-message"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-[#f6f3ec]/70" : "text-[#101113]/72"
                      }`}
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="landing-message"
                      name="message"
                      required
                      placeholder="What are you building? What's the timeline?"
                      className={`min-h-[160px] w-full resize-none rounded-lg border px-4 py-3 transition focus:outline-none focus:ring-2 ${
                        isDarkMode
                          ? "border-white/10 bg-[#101113]/65 text-[#f6f3ec] placeholder:text-[#f6f3ec]/34 focus:ring-[#e8bd3f]"
                          : "border-[#101113]/12 bg-white text-[#101113] placeholder:text-[#101113]/34 focus:ring-[#e8bd3f]"
                      }`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant={isDarkMode ? "light" : "dark"}
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Send message"}
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

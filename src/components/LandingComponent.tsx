import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { motion, useInView } from "framer-motion";

/* ─── SHARED ─── */
const SectionWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── NAV ─── */
const LandingNav = ({
  isDarkMode,
  onToggle,
}: {
  isDarkMode: boolean;
  onToggle: () => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-sm transition-colors duration-300 ${
        isDarkMode ? "bg-neutral-950/80" : "bg-white/80"
      }`}
    >
      <div className="mx-4 py-4">
        <div className="flex items-center justify-between px-2">
          <a href="/landing" className="flex items-center gap-2">
            <img
              src={isDarkMode ? "/logo-light.svg" : "/logo-dark.svg"}
              alt="logo"
              width={28}
              height={28}
            />
            <span
              className={`text-xl font-light ${
                isDarkMode ? "text-white" : "text-neutral-950"
              }`}
            >
              superweb
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isDarkMode
                    ? "text-slate-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={onToggle}
                className="sr-only peer"
              />
              <div
                className={`
                  relative w-11 h-6 rounded-full peer after:content-[''] after:absolute
                  after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300
                  after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                  peer-checked:after:translate-x-full peer-checked:after:border-white
                  ${isDarkMode ? "bg-slate-600" : "bg-gray-200"}
                `}
              ></div>
            </label>
            <a href="#contact">
              <Button className="group" variant={isDarkMode ? "light" : "dark"}>
                Let's connect
                <img
                  src="/arrow-right.svg"
                  alt="arrow right"
                  width={15}
                  height={15}
                  className={`group-hover:translate-x-1 transition-transform duration-200 ${
                    !isDarkMode ? "invert" : ""
                  }`}
                />
              </Button>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={onToggle}
                className="sr-only peer"
              />
              <div
                className={`
                  relative w-9 h-5 rounded-full peer after:content-[''] after:absolute
                  after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300
                  after:border after:rounded-full after:h-4 after:w-4 after:transition-all
                  peer-checked:after:translate-x-full peer-checked:after:border-white
                  ${isDarkMode ? "bg-slate-600" : "bg-gray-200"}
                `}
              ></div>
            </label>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 text-sm font-medium ${
                isDarkMode ? "text-slate-300" : "text-gray-600"
              }`}
            >
              {isMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden py-4 px-2 space-y-4 border-t ${
              isDarkMode ? "border-slate-800" : "border-gray-200"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium py-2 transition-colors ${
                  isDarkMode
                    ? "text-slate-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="group w-full"
                variant={isDarkMode ? "light" : "dark"}
              >
                Let's connect
                <img
                  src="/arrow-right.svg"
                  alt="arrow right"
                  width={15}
                  height={15}
                  className={`group-hover:translate-x-1 transition-transform duration-200 ${
                    !isDarkMode ? "invert" : ""
                  }`}
                />
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

/* ─── PROBLEM AGITATION ─── */
const ProblemSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const pains = [
    {
      headline: "Your website looks fine but doesn't convert",
      body: "You spent thousands on a beautiful site. Traffic comes in, but leads don't. Visitors scroll, shrug, and leave. The design isn't the problem — the strategy is.",
    },
    {
      headline: "You're stuck in revision hell",
      body: "Three months in. Twelve rounds of feedback. The agency still doesn't get your vision. You're paying for time, not outcomes — and you're running out of both.",
    },
    {
      headline: "Your competitors are shipping faster than you",
      body: "While you're debating font sizes, they launched two new features. Speed isn't a luxury anymore — it's survival. And your current process is too slow.",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Sound familiar?
            </h2>
          </div>
        </SectionWrapper>

        <div className="space-y-8">
          {pains.map((pain, index) => (
            <SectionWrapper key={index}>
              <div
                className={`rounded-2xl p-8 md:p-10 border-l-4 ${
                  isDarkMode
                    ? "bg-slate-800/30 border-slate-500"
                    : "bg-neutral-50 border-neutral-300"
                }`}
              >
                <h3
                  className={`text-xl md:text-2xl font-semibold mb-3 ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {pain.headline}
                </h3>
                <p
                  className={`text-lg leading-relaxed ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {pain.body}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper>
          <p
            className={`text-center text-xl md:text-2xl font-medium mt-16 ${
              isDarkMode ? "text-slate-200" : "text-slate-700"
            }`}
          >
            You don't need another agency.
            <br />
            You need a studio that ships.
          </p>
        </SectionWrapper>
      </div>
    </section>
  );
};

/* ─── SOLUTION SHOWCASE ─── */
const SolutionSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const solutions = [
    {
      title: "Strategy First",
      benefit:
        "Every pixel maps to a business goal. We design for conversions, not awards.",
      icon: "01",
    },
    {
      title: "Rapid Delivery",
      benefit:
        "From kickoff to live in days. No revision hell, no scope creep, no surprises.",
      icon: "02",
    },
    {
      title: "Full Stack Build",
      benefit:
        "Design, development, and deployment — one team, one timeline, one invoice.",
      icon: "03",
    },
  ];

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span
              className={`inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-slate-800 text-slate-300"
                  : "bg-neutral-100 text-neutral-600"
              }`}
            >
              How we solve it
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Design that drives revenue
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              We focus exclusively on SaaS — so every decision we make is
              informed by what actually s in your market.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <SectionWrapper key={index}>
              <div
                className={`rounded-2xl p-8 h-full transition-colors ${
                  isDarkMode
                    ? "bg-slate-800/50 hover:bg-slate-800/80"
                    : "bg-neutral-50 hover:bg-neutral-100"
                }`}
              >
                <span
                  className={`inline-block text-3xl font-bold mb-4 ${
                    isDarkMode ? "text-slate-600" : "text-neutral-300"
                  }`}
                >
                  {solution.icon}
                </span>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {solution.title}
                </h3>
                <p
                  className={isDarkMode ? "text-slate-400" : "text-slate-500"}
                >
                  {solution.benefit}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── SOCIAL PROOF ─── */
const SocialProofSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const testimonials = [
    {
      quote:
        "Superweb delivered our entire SaaS landing page in 5 days. Conversions jumped 3.2x in the first month.",
      name: "Sarah Chen",
      role: "Co-Founder, Metricly",
      metric: "3.2x conversion lift",
    },
    {
      quote:
        "We tried three agencies before finding Superweb. They actually understood SaaS and shipped faster than our own team.",
      name: "James Okoro",
      role: "Head of Growth, Stackflow",
      metric: "Launched in 6 days",
    },
    {
      quote:
        "The ROI was immediate. Our demo request rate doubled within two weeks of the new design going live.",
      name: "Maria Gonzalez",
      role: "CEO, Planbase",
      metric: "2x demo requests",
    },
  ];

  const stats = [
    { number: "50+", label: "SaaS products launched" },
    { number: "3.1x", label: "Avg. conversion lift" },
    { number: "7 days", label: "Avg. delivery time" },
  ];

  return (
    <section id="results" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span
              className={`inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-slate-800 text-slate-300"
                  : "bg-neutral-100 text-neutral-600"
              }`}
            >
              Results
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Don't take our word for it
            </h2>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 rounded-2xl p-8 ${
              isDarkMode ? "bg-slate-800/50" : "bg-neutral-50"
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {stat.number}
                </div>
                <div
                  className={
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <SectionWrapper key={index}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col justify-between ${
                  isDarkMode ? "bg-slate-800/30" : "bg-neutral-50"
                }`}
              >
                <p
                  className={`text-lg mb-6 leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  "{t.quote}"
                </p>
                <div>
                  <div
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {t.name}
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {t.role}
                  </div>
                  <div
                    className={`text-sm font-medium mt-2 ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {t.metric}
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── HOW IT WORKS ─── */
const HowItWorksSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const steps = [
    {
      step: "01",
      title: "Book a call",
      description:
        "30-minute strategy session. We learn your goals, audience, and constraints. No fluff, no sales pitch.",
    },
    {
      step: "02",
      title: "We build it",
      description:
        "Our team designs, develops, and tests your product. You get updates every 48 hours. Two rounds of revisions included.",
    },
    {
      step: "03",
      title: "You launch",
      description:
        "We deploy, hand over everything, and stick around for support. You own 100% of the code and assets.",
    },
  ];

  return (
    <section id="process" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span
              className={`inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-slate-800 text-slate-300"
                  : "bg-neutral-100 text-neutral-600"
              }`}
            >
              Process
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Three steps. That's it.
            </h2>
          </div>
        </SectionWrapper>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <SectionWrapper key={index}>
              <div className="flex items-start gap-6 md:gap-10">
                <span
                  className={`text-5xl md:text-6xl font-bold shrink-0 ${
                    isDarkMode ? "text-slate-700" : "text-neutral-200"
                  }`}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    className={`text-2xl font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-lg ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── OBJECTION CRUSHER FAQ ─── */
const FAQSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is Superweb right for my project?",
      answer:
        "We work exclusively with SaaS companies and digital product teams. If you're building a software product and need a high-ing web presence — landing pages, marketing sites, or product interfaces — we're your team. If you need a blog or brochure site, we're probably not the best fit.",
    },
    {
      question: "What if I don't like the design?",
      answer:
        "Every project includes two full rounds of revisions. We start with a strategy call so we're aligned before a single pixel is placed. In 50+ projects, we've never had a client walk away unhappy — but if you're not satisfied after revisions, we'll refund the project fee. No questions.",
    },
    {
      question: "Why Superweb over a full-service agency?",
      answer:
        "Agencies spread thin across industries. We go deep on one: SaaS. That means we already know what converts in your market, what patterns your users expect, and what mistakes to avoid. You're not paying for us to learn — you're paying for what we already know.",
    },
    {
      question: "How fast can you deliver?",
      answer:
        "Most landing pages ship in 5-7 days. Larger projects (multi-page sites, product interfaces) take 2-4 weeks. We send progress updates every 48 hours so you're never in the dark.",
    },
    {
      question: "What's the catch?",
      answer:
        "No catch. No hidden fees, no surprise upcharges, no lock-in contracts. You get a fixed price upfront, own 100% of the code and assets, and can walk away anytime. We keep clients because the work is good, not because of fine print.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span
              className={`inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-slate-800 text-slate-300"
                  : "bg-neutral-100 text-neutral-600"
              }`}
            >
              FAQ
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Questions? Answered.
            </h2>
          </div>
        </SectionWrapper>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <SectionWrapper key={index}>
              <div
                className={`rounded-2xl overflow-hidden ${
                  isDarkMode ? "bg-slate-800/30" : "bg-neutral-50"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`w-full text-left p-6 flex justify-between items-center gap-4 ${
                    isDarkMode
                      ? "text-white hover:bg-slate-800/50"
                      : "text-slate-800 hover:bg-neutral-100"
                  } transition-colors`}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span
                    className={`text-2xl shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.2 }}
                    className={`px-6 pb-6 ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <p className="leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── FINAL CTA ─── */
const FinalCTASection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionWrapper>
          <div
            className={`rounded-3xl p-10 md:p-16 text-center ${
              isDarkMode ? "bg-slate-800/50" : "bg-neutral-50"
            }`}
          >
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Stop losing customers to bad design
            </h2>
            <p
              className={`text-lg md:text-xl mb-4 max-w-2xl mx-auto ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Go from a site that "looks nice" to one that prints money. Book a
              free strategy call — we'll show you exactly what's costing you
              conversions.
            </p>
            <p
              className={`text-sm mb-8 ${
                isDarkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              No commitment. No sales pitch. Just honest advice on your product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact" variant={isDarkMode ? "light" : "dark"}>
                Book your free call
                <img
                  src="/arrow-right.svg"
                  alt="arrow right"
                  width={15}
                  height={15}
                  className={`group-hover:translate-x-1 transition-transform duration-200 ${
                    !isDarkMode ? "invert" : ""
                  }`}
                />
              </Button>
            </div>
            <p
              className={`text-xs mt-6 ${
                isDarkMode ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Not satisfied? Full refund. No questions asked.
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

/* ─── CONTACT FORM ─── */
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className={`inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium ${
                  isDarkMode
                    ? "bg-slate-800 text-slate-300"
                    : "bg-neutral-100 text-neutral-600"
                }`}
              >
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
                  <p
                    className={
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }
                  >
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

                  <Button
                    type="submit"
                    variant={isDarkMode ? "light" : "dark"}
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                    <img
                      src="/arrow-right.svg"
                      alt="arrow right"
                      width={15}
                      height={15}
                      className={`group-hover:translate-x-1 transition-transform duration-200 ${
                        !isDarkMode ? "invert" : ""
                      }`}
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

/* ─── FOOTER ─── */
const LandingFooter = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <footer
      className={`py-8 mt-auto transition-colors duration-300 ${
        isDarkMode ? "text-slate-500" : "text-neutral-600"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3
              className={`text-2xl mb-4 font-bold ${
                isDarkMode ? "text-white" : "text-neutral-950"
              }`}
            >
              superweb
            </h3>
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
                <a
                  href="#services"
                  className={`hover:${isDarkMode ? "text-white" : "text-neutral-900"} transition-colors`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className={`hover:${isDarkMode ? "text-white" : "text-neutral-900"} transition-colors`}
                >
                  Results
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`hover:${isDarkMode ? "text-white" : "text-neutral-900"} transition-colors`}
                >
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
          className={`mt-8 pt-4 text-center text-xs ${
            isDarkMode ? "text-slate-600" : "text-neutral-500"
          }`}
        >
          <p>
            &copy; {new Date().getFullYear()} superweb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* ─── MAIN LANDING PAGE ─── */
export const LandingComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.style.backgroundColor = isDarkMode
      ? "#0a0a0a"
      : "#ffffff";
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <div
      className={`transition-colors duration-300 ${
        isDarkMode ? "bg-neutral-950" : "bg-white"
      }`}
    >
      {/* Nav */}
      <LandingNav
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
      />

      {/* ─── HERO ─── */}
      <section className="relative">
        <div className="relative z-10">
          <div
            className={`
              flex justify-start items-center relative m-4 min-h-[80vh] rounded-3xl
              p-4 sm:p-4 md:p-8 lg:p-16 overflow-hidden
              ${isDarkMode ? "bg-neutral-950" : "bg-gradient-to-br from-neutral-50 to-neutral-100"}
            `}
          >
            {/* Animated gradient background */}
            <div
              className={`
                absolute inset-0 animate-gradient
                ${
                  isDarkMode
                    ? "bg-gradient-to-br from-slate-800/20 via-slate-700/20 to-slate-800/20"
                    : "bg-gradient-to-br from-neutral-100/40 via-neutral-100/40 to-neutral-100/40"
                }
              `}
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black)]">
              <div
                className={`
                  absolute inset-0 bg-[size:4rem_4rem]
                  ${
                    isDarkMode
                      ? "bg-[linear-gradient(to_right,#64748b20_1px,transparent_1px),linear-gradient(to_bottom,#64748b20_1px,transparent_1px)]"
                      : "bg-[linear-gradient(to_right,#4b5563_1px,transparent_1px),linear-gradient(to_bottom,#4b5563_1px,transparent_1px)] opacity-[0.08]"
                  }
                `}
              />
              <div
                className={`
                  absolute inset-0
                  ${
                    isDarkMode
                      ? "bg-[radial-gradient(circle_800px_at_100%_200px,#64748b10,transparent)]"
                      : "bg-[radial-gradient(circle_800px_at_100%_200px,#818cf810,transparent)]"
                  }
                `}
              />
            </div>

            {/* Glowing orbs */}
            <div
              className={`
                absolute top-20 right-20 w-72 h-72 rounded-full blur-[128px] animate-pulse
                ${isDarkMode ? "bg-slate-500/30" : "bg-indigo-200/40"}
              `}
            />
            <div
              className={`
                absolute bottom-20 left-20 w-72 h-72 rounded-full blur-[128px] animate-pulse-slow
                ${isDarkMode ? "bg-slate-400/30" : "bg-blue-200/40"}
              `}
            />

            <div className="flex flex-col h-full justify-center align-center items-start gap-6 relative z-10 max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`gabarito text-4xl sm:text-5xl md:text-6xl font-bold leading-tight ${
                  isDarkMode ? "text-slate-50" : "text-slate-800"
                }`}
              >
                Your business deserves a better website.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className={`text-lg md:text-xl max-w-xl ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                We design and build high-converting landing pages, marketing
                sites, and product interfaces for SaaS teams — in days, not
                months.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button
                  href="#contact"
                  variant={isDarkMode ? "light" : "dark"}
                >
                  Book a free strategy call
                  <img
                    src="/arrow-right.svg"
                    alt="arrow right"
                    width={15}
                    height={15}
                    className={`group-hover:translate-x-1 transition-transform duration-200 ${
                      !isDarkMode ? "invert" : ""
                    }`}
                  />
                </Button>
                <Button
                  href="#process"
                  variant={isDarkMode ? "dark" : "light"}
                >
                  See how it works
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className={`text-sm ${
                  isDarkMode ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Trusted by 50+ SaaS teams worldwide
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM AGITATION ─── */}
      <ProblemSection isDarkMode={isDarkMode} />

      {/* ─── SOLUTION SHOWCASE ─── */}
      <SolutionSection isDarkMode={isDarkMode} />

      {/* ─── SOCIAL PROOF ─── */}
      <SocialProofSection isDarkMode={isDarkMode} />

      {/* ─── HOW IT WORKS ─── */}
      <HowItWorksSection isDarkMode={isDarkMode} />

      {/* ─── FAQ / OBJECTION CRUSHER ─── */}
      <FAQSection isDarkMode={isDarkMode} />

      {/* ─── FINAL CTA ─── */}
      <FinalCTASection isDarkMode={isDarkMode} />

      {/* ─── CONTACT FORM ─── */}
      <ContactSection isDarkMode={isDarkMode} />

      {/* Footer */}
      <LandingFooter isDarkMode={isDarkMode} />
    </div>
  );
};

export default LandingComponent;

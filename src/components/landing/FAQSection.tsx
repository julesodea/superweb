import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    question: "Is Superweb right for my project?",
    answer:
      "We work exclusively with SaaS companies and digital product teams. If you're building a software product and need a high-converting web presence - landing pages, marketing sites, or product interfaces - we're your team. If you need a blog or brochure site, we're probably not the best fit.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "Every project includes two full rounds of revisions. We start with a strategy call so we're aligned before a single pixel is placed. In 50+ projects, we've never had a client walk away unhappy - but if you're not satisfied after revisions, we'll refund the project fee. No questions.",
  },
  {
    question: "Why Superweb over a full-service agency?",
    answer:
      "Agencies spread thin across industries. We go deep on one: SaaS. That means we already know what converts in your market, what patterns your users expect, and what mistakes to avoid. You're not paying for us to learn - you're paying for what we already know.",
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

const FAQSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-4 py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <SectionWrapper>
          <div className="md:sticky md:top-28">
            <span className="mb-6 inline-block rounded-md bg-[#e8bd3f] px-3 py-1.5 text-sm font-black text-[#101113]">
              FAQ
            </span>
            <h2
              className={`text-balance text-4xl font-black leading-none md:text-6xl ${
                isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
              }`}
            >
              Questions we usually answer before kickoff.
            </h2>
          </div>
        </SectionWrapper>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <SectionWrapper key={index} delay={(index % 3) * 0.05}>
              <div
                className={`overflow-hidden rounded-lg ${
                  isDarkMode
                    ? "border border-white/8 bg-white/[0.04]"
                    : "border border-[#101113]/8 bg-white/50"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`flex w-full items-center justify-between gap-4 p-6 text-left transition-colors ${
                    isDarkMode
                      ? "text-[#f6f3ec] hover:bg-white/[0.05]"
                      : "text-[#101113] hover:bg-white/80"
                  }`}
                >
                  <span className="text-lg font-black">{faq.question}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#e8bd3f]/12 text-2xl leading-none text-[#e8bd3f] transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className={`px-6 pt-2 pb-6 ${
                          isDarkMode ? "text-[#f6f3ec]/58" : "text-[#101113]/62"
                        }`}
                      >
                        <p className="leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

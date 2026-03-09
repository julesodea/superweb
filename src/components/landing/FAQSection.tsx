import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium bg-[#FCD34D] text-black">
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
                          isDarkMode ? "text-slate-400" : "text-slate-500"
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
